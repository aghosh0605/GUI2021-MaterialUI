import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const PrettoSlider = withStyles({
  root: {
    color: "#FF8E53",
    height: 8,
    left: -3,
    // width: 100,
  },
  thumb: {
    height: 25,
    width: 25,
    backgroundColor: "#FE6B8B ",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -10,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 10,
    borderRadius: 4,
  },
})(Slider);

export default function IOSSlider(props) {
  return (
    <div>
      <Typography style={{ fontFamily: "Perpetua" }}>{props.label}</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={0}
      />
    </div>
  );
}
