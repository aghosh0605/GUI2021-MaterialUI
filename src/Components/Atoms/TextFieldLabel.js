import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

export default function TextFieldLabel(props) {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          disabled
          className={classes.root}
          label={props.label}
          id="filled-size-small"
          defaultValue="Value"
          variant="filled"
          size="small"
        />
      </div>
    </form>
  );
}
