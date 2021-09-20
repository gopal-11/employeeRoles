import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FormControlLabel, Checkbox, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "left",
    paddingLeft: "5px",
    minWidth: "100%",
    margin: "10px",
  },

  pageHeader: {
    padding: theme.spacing(3),
    paddingBottom: 0,
    flexWrap: "wrap",
    display: "flex",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    maxWidth: "100vw",
    minWidth: "100%",
    minHeight: "50px",
  },
  pList: {
    paddingLeft: "25px",
  },
  mList: {
    paddingLeft: "50px",
  },
}));

//var selectedPermissionName = [[], []];
const Permissions = ({ set }) => {
  const classes = useStyles();
  const [featuresData, setFeaturesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPermission, setSelectedPermission] = useState({});
  const [sPermission, setSPermission] = useState([]);
  const [mPermission, setMPermission] = useState([]);

  const loadFeatures = async () => {
    const res = await axios.get(
      "http://pedlinux17.uk.evolving.com:8080/UserManagementService-0.0.1/v1/feature"
    );
    //console.log(res)
    setFeaturesData(res.data);
    setFilteredData(res.data);
  };

  // console.log(selectedPermissionsCode);
  const handleSelectionChange = (e) => {
    // setSPermission(selectedPermissionName)

    var tempselectedPermission = selectedPermission;
    console.log(e.target.checked);
    if (e.target.checked === true) {
      var pCode = e.target.value;
      var pName = e.target.name;
      // selectedPermissionName[0].push(e.target.name);

      setSelectedPermission({
        ...selectedPermission,
        [e.target.value]: e.target.name,
      });
      setSPermission([...sPermission, e.target.name]);
    } else {
      if (!mPermission.includes(e.target.name)) {
        delete tempselectedPermission[e.target.value];

        setSelectedPermission(tempselectedPermission);

        var index = sPermission.indexOf(e.target.name);
        sPermission.splice(index, 1);
        setSPermission(sPermission);
      }
    }
    // console.log(selectedPermission);

    filteredData.forEach((data) => {
      // console.log(data.permissionList.permissionCode )
      data.permissionList.forEach((permissions) => {
        if (
          (permissions.permissionCode in tempselectedPermission ||
            permissions.permissionCode === pCode) &&
          isValidArray(permissions.mandatoryPermissionList)
        ) {
          var mL = permissions.mandatoryPermissionList[0];
          console.log(mL);
          setSelectedPermission({
            ...tempselectedPermission,
            [pCode]: pName,
            [mL.code]: mL.name,
          });
          if (
            !mPermission.includes(mL.name) &&
            !sPermission.includes(mL.name)
          ) {
            // if (!sPermission.includes(mL.name)) {
            //   var tempSPermission = sPermission;
            //   delete tempSPermission[mL.name];
            //   setSPermission(tempSPermission);
            // }

            setMPermission([...mPermission, mL.name]);
          }
        }
      });
    });
  };
  //console.log(selectedPermission)

  const handleSearch = (e) => {
    if (e.target.value === "") setFilteredData(featuresData);
    else {
      setFilteredData(
        featuresData.filter((x) => x.featureName.includes(e.target.value))
      );
      //updateSelection()
    }
  };

  function isValidArray(data) {
    if (Array.isArray(data) && data.length) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    loadFeatures();
  }, []);

  // useEffect(() => {
  //   set(Object.keys(selectedPermission));
  // }, [selectedPermission]);

  console.log(sPermission);
  console.log(selectedPermission);
  return (
    <>
      <div>
        {/* <Paper className={classes.pageHeader}>
          {sPermission.map((data) => {
            return (
              <Typography variant="h6" style={{ paddingRight: "10px" }}>
                {data}
              </Typography>
            );
          })}
          <Typography style={{ paddingRight: "30px" }}></Typography>
          {mPermission.map((data) => {
            return (
              <Typography variant="h6" style={{ paddingRight: "10px" }}>
                {data}
              </Typography>
            );
          })}
        </Paper> */}

        <Paper className={classes.root}>
          <TextField
            label="Search"
            margin="normal"
            variant="outlined"
            style={{ width: "300px" }}
            onChange={handleSearch}
          />
          {filteredData.map((data) => {
            // console.log(selectedPermission)
            return (
              <>
                <h3> {data.featureName} :</h3>
                {data.permissionList.map((permissions) => {
                  var temp = false;

                  if (permissions.permissionCode in selectedPermission)
                    temp = true;

                  return (
                    <>
                      <FormControlLabel
                        control={
                          <Checkbox
                            //checked={`${selectedPermission.temp}`===undefined?false:`${selectedPermission.temp}`}
                            checked={temp}
                            onChange={(e) => handleSelectionChange(e)}
                            value={permissions.permissionCode}
                            name={permissions.permissionName}
                            color="primary"
                          />
                        }
                        label={permissions.permissionName}
                        className={classes.pList}
                      />

                      {permissions.permissionCode in selectedPermission &&
                      isValidArray(permissions.mandatoryPermissionList)
                        ? permissions.mandatoryPermissionList.map(
                            (mandatoryList) => {
                              return (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={true}
                                      value={mandatoryList.code}
                                      name={mandatoryList.name}
                                      color="primary"
                                      disabled={true}
                                    />
                                  }
                                  label={mandatoryList.name}
                                  className={classes.mList}
                                />
                              );
                            }
                          )
                        : null}
                    </>
                  );
                })}
              </>
            );
          })}
        </Paper>
      </div>
    </>
  );
};

export default Permissions;
