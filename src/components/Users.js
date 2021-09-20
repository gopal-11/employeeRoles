import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ViewIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import AddCircleIcon from "@material-ui/icons/AddCircle";
const useStyles = makeStyles({
  root: {
    margin: "20px",
  },
  table: {
    // border: "1px solid black",
  },
  btn: {
    margin: "5px",
  },
});
const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  let history = useHistory();
  const handleAddUserClick = () => {};

  const handleViewClick = () => {};

  const handleEditClick = (userid) => {};

  const handleDeleteClick = async () => {};

  useEffect(() => {
    loadUsers();
  }, []);

  function isValidArray(data) {
    if (Array.isArray(data) && data.length) {
      return true;
    } else {
      return false;
    }
  }
  const loadUsers = async () => {
    const result = await axios.get(
      "http://pedlinux17.uk.evolving.com:8080/UserManagementService-0.0.1/v1/user"
    );
    //console.log(result);
    setUsers(result.data);
  };
  // console.log(
  //   isValidArray(users[0].assignedRoleList)
  //     ? users[0].assignedRoleList[0]
  //     : null
  // );
  return (
    <Paper elevation={4} className={classes.root}>
      <div style={{ float: "right", padding: "5px" }}>
        <Button
          // color="secondary"
          onClick={handleAddUserClick}
          style={{ textTransform: "none" }}
        >
          <AddCircleIcon />
        </Button>
      </div>

      <TableContainer
        component={Paper}
        variant="outlined"
        // style={{ margin: "20px" }}
      >
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow style={{ fontSize: "20px" }}>
              <TableCell>
                <b>Id</b>
              </TableCell>
              <TableCell>
                <b>firstName</b>
              </TableCell>
              <TableCell>
                <b>lastName</b>
              </TableCell>
              <TableCell>
                <b>role</b>
              </TableCell>

              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>
                  {isValidArray(row.assignedRoleList)
                    ? row.assignedRoleList[0].name
                    : null}
                </TableCell>
                <TableCell align="center">
                  <ViewIcon
                    id={row.id}
                    className={classes.btn}
                    onClick={() => handleViewClick(row.id)}
                  />

                  <EditIcon
                    id={row.id}
                    className={classes.btn}
                    onClick={() => handleEditClick(row.id)}
                  />

                  <DeleteIcon
                    id={row.id}
                    className={classes.btn}
                    onClick={() => handleDeleteClick(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Users;
