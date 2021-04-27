import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AppBarRight from "./../Molecules/AppBarRight";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBarBasic: {
    background: "linear-gradient(90deg, #c31432 20%, #240b36 100%)",
  },
}));

export default function AppBarBasic() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarBasic} position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            RUDRA
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Time
          </Typography>
          <AppBarRight />
        </Toolbar>
      </AppBar>
    </div>
  );
}
