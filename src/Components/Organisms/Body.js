import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IOSSlider from "./../Atoms/IOSSlider";
import TooltipSlider from "./../Atoms/TooltipSlider";
import DiscreteSlider from "./../Atoms/DiscreteSlider";
import Typography from "@material-ui/core/Typography";
import TextFieldLabel from "./../Atoms/TextFieldLabel";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 20,
  },
  paper: {
    width: 250,
    margin: 10,
  },
  div: {
    width: 90,
  },
});

export default function Body() {
  const classes = useStyles();
  return (
    <div className="auto-rows-max grid grid-flow-col ">
      <div>
        <Paper className={classes.root} elevation={3}>
          <IOSSlider label="Max Speed" />
          <IOSSlider label="Acceleration Up" />
          <IOSSlider label="Off Req" />
        </Paper>
        <Paper className={classes.root} elevation={3}>
          <TooltipSlider />
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
      <div className={classes.div}>
        <Paper className={classes.paper} elevation={3}>
          <TextFieldLabel />
          <TextFieldLabel />
        </Paper>
      </div>
      <div className={classes.div}>
        <Paper className={classes.paper} elevation={3}>
          <TextFieldLabel />
          <TextFieldLabel />
        </Paper>
      </div>
      <div className={classes.div}>
        <Paper className={classes.paper} elevation={3}>
          <TextFieldLabel />
          <TextFieldLabel />
        </Paper>
      </div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
  );
}
