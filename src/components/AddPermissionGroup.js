import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Permissions from "./Permissions";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
    btn: {
      margin: "20px",
      flexWrap: "wrap",
      variant: "contained",
    },
  },
}));

const AddPermissionGroup = () => {
  const history = useHistory();
  const classes = useStyles();
  const [groupData, setGroupData] = useState({
    tenantDomainName: "",
    groupName: "",
    description: "",
    assignedPermissionList: [],
  });
  const [selectedPermissionsCode, setSelectedPermissionsCode] = useState([]);
  console.log(selectedPermissionsCode);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupData({
      ...groupData,
      [name]: value,
    });
  };

  const set = (s) => {
    setSelectedPermissionsCode(s);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGroupData({
      ...groupData,
      assignedPermissionList: [...selectedPermissionsCode],
    });

    history.push({ pathname: "/groups" });
  };
  console.log(groupData);
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            name="tenantDomainName"
            label="Tenant Domain Name"
            variant="outlined"
            value={groupData.tenantDomainName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="groupName"
            label="Group Name"
            variant="outlined"
            value={groupData.groupName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            value={groupData.description}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Permissions set={set} />
        </Grid>
        <div>
          <Button type="submit" className={classes.btn}>
            Submit
          </Button>
        </div>
      </Grid>
    </form>
  );
};

export default AddPermissionGroup;
