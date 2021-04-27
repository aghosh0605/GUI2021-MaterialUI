import React from "react";
import IconButton from "@material-ui/core/IconButton";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
// import AutorenewIcon from "@material-ui/icons/Autorenew"; //will be used with FlashAutoIcon with React State
import FlashAutoIcon from "@material-ui/icons/FlashAuto";

export default function AppBarRight() {
  return (
    <div>
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
    </div>
  );
}
