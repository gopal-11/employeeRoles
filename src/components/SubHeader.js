import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Button } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "left",
    paddingLeft: "5px",
  },

  pageHeader: {
    padding: theme.spacing(3),
    paddingBottom: 0,
    flexWrap: "wrap",
    display: "flex",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    maxWidth: "100vw",
    minHeight: "50px",
  },
  btn: {
    marginLeft: "30px",
    marginRight: "30px",
    textTransform: "none",
  },
}));

const SubHeader = () => {
  const classes = useStyles();

  const handleUsersClick = () => {};

  const handleRolesClick = () => {};

  const handleGroupsClick = () => {};

  const handlePermissionsClick = () => {};

  const handleFeaturesClick = () => {};

  return (
    <div>
      <Paper className={classes.pageHeader}>
        <Button
          component={Link}
          to="/users"
          //color="primary"
          //   onClick={handleUsersClick}
          className={classes.btn}
        >
          USERS
        </Button>

        <Button
          component={Link}
          to="/roles"
          //color="primary"
          //   onClick={handleAddUserClick}
          className={classes.btn}
        >
          ROLES
        </Button>

        <Button
          component={Link}
          to="/groups"
          //color="none"
          //onClick={handleGroupsClick}
          className={classes.btn}
        >
          GROUPS
        </Button>

        <Button
          component={Link}
          to="/permissions"
          //color="primary"
          //onClick={handlePermissionsClick}
          className={classes.btn}
        >
          PERMISSIONS
        </Button>

        <Button
          component={Link}
          to="/features"
          // color="inherit"
          //onClick={handleFeaturesClick}
          className={classes.btn}
        >
          FEATURES
        </Button>
      </Paper>
    </div>
  );
};

export default SubHeader;
