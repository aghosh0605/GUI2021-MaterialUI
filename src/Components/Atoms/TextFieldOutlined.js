import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0),
      width: 200,
    },
    inner: {
      innerHeight: 100,
    },
  },
}));

export default function TextFieldSizes(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          disabled
          className={classes.inner}
          id="outlined-size-small"
          defaultValue="Time"
          variant="outlined"
          size="small"
        />
      </div>
    </form>
  );
}
