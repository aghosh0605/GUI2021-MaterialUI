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
    fontFamily: "Times New Roman",
  },
  timer: {
    flexGrow: 1,
    fontFamily: "Courier",
  },
  appBarBasic: {
    background: "linear-gradient(45deg, #2196F3 50%, #21CBF3 90%)",
    color: "black",
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
            <b>
              <i>RUDRA</i>
            </b>
          </Typography>
          <Typography variant="h6" className={classes.timer}>
            Time
          </Typography>
          <AppBarRight />
        </Toolbar>
      </AppBar>
    </div>
  );
}
