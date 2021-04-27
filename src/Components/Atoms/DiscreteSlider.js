import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider(props) {
  return (
    <div>
      <Typography id="discrete-slider">{props.label}</Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </div>
  );
}
