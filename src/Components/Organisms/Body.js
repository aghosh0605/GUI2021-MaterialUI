import React from "react";
import SliderController from "./../Molecules/SliderController";
import InfoDisplay from "./../Molecules/InfoDisplay";
import "./Organisms.css";

export default function Body() {
  return (
    <div id="body_main" className="auto-rows-max grid grid-flow-col ">
      <SliderController />
      <InfoDisplay label1="Heading" label2="Altitude" />
      <InfoDisplay label1="Latitude" label2="Longitude" />
      <InfoDisplay label1="Distance" label2="Difference" />
      <InfoDisplay label1="Leg" label2="Empty" />
      <div>6</div>
      <div>7</div>
    </div>
  );
}
