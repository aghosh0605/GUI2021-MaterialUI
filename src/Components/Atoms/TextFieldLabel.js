import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 17,
  },
});

export default function TextFieldLabel(props) {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          style={{ fontFamily: "Monaco" }}
          className={classes.root}
          label={props.label}
          defaultValue="Value"
          id="filled-size-small"
          variant="filled"
          size="small"
        />
      </div>
    </form>
  );
}
