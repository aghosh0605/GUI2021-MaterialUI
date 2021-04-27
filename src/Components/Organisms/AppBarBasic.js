import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
// import AutorenewIcon from "@material-ui/icons/Autorenew"; //will be used with FlashAutoIcon with React State
import FlashAutoIcon from "@material-ui/icons/FlashAuto";

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
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
          <IconButton color="inherit" aria-label="automode">
            <FlashAutoIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="nightmode">
            <NightsStayRoundedIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="notification">
            <NotificationsActiveOutlinedIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="killswitch">
            <WarningRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
