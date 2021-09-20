import React from "react";
import { AppBar, CssBaseline } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar style={{ paddingLeft: "10px " }}>
        <h1>UserManagement</h1>
      </AppBar>
      <div className={classes.appBarSpacer} />
    </div>
  );
};

export default Navbar;
