import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgressBar from "./../Atoms/CircularProgressBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #007991 30%, #78ffd6 90%)",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
  },
  grid: {
    padding: 4,
    gap: 7,
  },
  text: {
    fontFamily: "Optima",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <CircularProgressBar />
        <Typography className={classes.text}>
          CPU Usage % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <CircularProgressBar />
        <Typography className={classes.text}>
          Memory Usage % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <CircularProgressBar />
        <Typography className={classes.text}>
          Network Usage % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
        <CircularProgressBar />
        <Typography className={classes.text}>
          Power Usage % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
      </Grid>
    </div>
  );
}
