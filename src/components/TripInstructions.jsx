import {React, useState} from 'react'
import './tripInstructions.css'

export default function TripInstructions({steps, duration}) {
    const instructions = document.getElementById('instructions');
    let tripInstructions = '';
    if(steps != undefined)
    {
        for (const step of steps) {
        tripInstructions += `<li>${step.maneuver.instruction}</li>`;
    }}
    if(instructions){
        instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(duration / 60
        )} min  </strong></p><ol>${tripInstructions}</ol>`;
    }
    
  return (
    <>
    <div id="instructions" className={tripInstructions ? '' : 'inactive'}>{}</div>
        </>
  )
}