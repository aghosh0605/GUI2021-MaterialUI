import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldLabel from "./../Atoms/TextFieldLabel";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  paper: {
    width: 250,
    margin: 10,
  },
  div: {
    width: 90,
  },
});

export default function InfoDisplay(props) {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Paper className={classes.paper} elevation={3}>
        <TextFieldLabel label={props.label1} />
        <TextFieldLabel label={props.label2} />
      </Paper>
    </div>
  );
}
