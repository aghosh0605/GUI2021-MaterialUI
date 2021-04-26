import React from "react";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

export default function NavButton() {
  return (
    <div>
      <Fab variant="extended" size="small">
        <NavigationIcon className={classes.extendedIcon} />
        BIO GUI
      </Fab>
    </div>
  );
}
