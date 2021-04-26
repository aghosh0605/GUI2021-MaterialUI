import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IOSSlider from "./../Atoms/IOSSlider";
import TooltipSlider from "./../Atoms/TooltipSlider";
import DiscreteSlider from "./../Atoms/DiscreteSlider";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 20,
  },
});

export default function Body() {
  const classes = useStyles();
  return (
    <div className="auto-rows-max grid grid-flow-col gap-4">
      <div>
        <Paper className={classes.root} elevation={3}>
          <IOSSlider />
          <IOSSlider />
          <IOSSlider />
        </Paper>
        <Paper className={classes.root} elevation={3}>
          <TooltipSlider />
          <TooltipSlider />
          <TooltipSlider />
        </Paper>
        <Paper className={classes.root} elevation={3}>
          <DiscreteSlider />
          <DiscreteSlider />
          <DiscreteSlider />
        </Paper>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
  );
}
