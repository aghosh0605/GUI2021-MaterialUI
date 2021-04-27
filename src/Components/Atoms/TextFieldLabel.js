import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

export default function TextFieldLabel() {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          disabled
          className={classes.root}
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />
      </div>
    </form>
  );
}
