import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TimerIcon from "@material-ui/icons/Timer";
import PauseCircleFilledRoundedIcon from "@material-ui/icons/PauseCircleFilledRounded";
import StopRoundedIcon from "@material-ui/icons/StopRounded";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #ffcdd2 30%, #ffcdd2 90%)",
  },
  grid: {
    padding: 0,
  },
});

export default function CommandBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="flex flex-row-reverse">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <StopRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <PauseCircleFilledRoundedIcon fontSize="small" />
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <TimerIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
