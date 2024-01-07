import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { NativeBaseProvider, Box } from "native-base";
import Map from './components/Map';

export default function App() {
  return(
    <NativeBaseProvider>
      <Map />
    </NativeBaseProvider>
  );
}
