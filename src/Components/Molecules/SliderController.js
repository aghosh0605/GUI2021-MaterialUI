import React from "react";
import IOSSlider from "./../Atoms/IOSSlider";
import TooltipSlider from "./../Atoms/TooltipSlider";
import DiscreteSlider from "./../Atoms/DiscreteSlider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 20,
  },
});

export default function SliderController() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root} elevation={3}>
        <IOSSlider label="Max Speed" />
        <IOSSlider label="Acceleration Up" />
        <IOSSlider label="Off Req" />
      </Paper>
      <Paper className={classes.root} elevation={3}>
        <TooltipSlider label="Empty" />
      </Paper>
      <Paper className={classes.root} elevation={3}>
        <Typography align="center">Motors</Typography>
        <DiscreteSlider label="Left Motor" />
        <DiscreteSlider label="Right Motor" />
        <Typography align="center">Actuators</Typography>
        <DiscreteSlider label="Left Actuator" />
        <DiscreteSlider label="Right Actuator" />
      </Paper>
    </div>
  );
}
