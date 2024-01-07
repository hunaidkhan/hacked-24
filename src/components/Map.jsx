import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { NativeBaseProvider, Box, Input, Button, usePropsWithComponentTheme } from "native-base";
import keys from '../secret/secrets.js';
import TripInstructions from './TripInstructions.jsx';

mapboxgl.accessToken = keys.MAPBOX_KEY;

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-113.5202);
  const [lat, setLat] = useState(53.5265);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [zoom, setZoom] = useState(13.75);
  const [steps, setSteps] = useState();
  const [duration, setDuration] = useState();

  let locationCoords = [];
  async function getRoute(end) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    
    const start = [map.current.getCenter().lng, map.current.getCenter().lat];
    setStart(start);
    console.log("start",start);
    console.log("end", end);
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/walking/${locationCoords[0]},${locationCoords[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: 'GET' }
    );
    const json = await query.json();
   
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };
    setSteps(data.legs[0].steps);
    setDuration(data.duration); 
    // if the route already exists on the map, we'll reset it using setData
    if (map.current.getSource('route')) {
      map.current.getSource('route').setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': ' #0096FF',
          'line-width': 5,
          'line-opacity': 1
          
        }
      });
    }
    // add turn instructions here at the end
  }
  
  function handleClick(e){
    console.log(e);
    }

  function success(position) {
    console.log("Successfully reached position");
    setLng(position.coords.longitude.toFixed(4));
    setLat(position.coords.latitude.toFixed(4));
    locationCoords = [position.coords.longitude.toFixed(4), position.coords.latitude.toFixed(4)]

    map.current.setCenter([
      position.coords.longitude.toFixed(4),
      position.coords.latitude.toFixed(2),
    ]);
    setStart([
      position.coords.longitude.toFixed(4),
      position.coords.latitude.toFixed(2),
    ]);
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/hunaidkhan/clr3217ug00wk01nv8f1g0fhp",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    if ("geolocation" in navigator) {
      //fetches location of user
      navigator.geolocation.getCurrentPosition(
        success,
        (error) => console.log(error),
        { enableHighAccuracy: true }
      );
    }
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      })
    );
    

    map.current.on('click', (event) => {
      const startCoords = [map.current.getCenter().lng, map.current.getCenter().lat];
      console.log("sfsgfwifgneinger",startCoords);
      setStart(startCoords);
      console.log(start);
      const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
      console.log("coordiates", coords);
      const end = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: coords
            }
          }
        ]
      };
      console.log(end);
      
      if (map.current.getLayer('end')) {
        map.current.getSource('end').setData(end);
      } else {
        map.current.addLayer({
          id: 'end',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: coords
                  }
                }
              ]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#f30'
          }
        });
      }
      
      getRoute(coords);
    });
  });


  return (
    <NativeBaseProvider>
      <div>
        <div className="sidebar">
          <Input
            variant="underlined"
            mx="3"
            placeholder="Your Location"
            style={{ color: "white" }}
          />
          {/* Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} */}
          <Input
            variant="underlined"
            mx="3"
            placeholder="Destination"
            style={{ color: "white" }}
          />
          <Button onPress={handleClick} style={{marginTop: '0.7rem'}} >Go!</Button>

        </div>

    <div ref={mapContainer} className="map-container"/>
    <TripInstructions steps = {steps} duration={duration} />
      </div>
    </NativeBaseProvider>
  );
}
