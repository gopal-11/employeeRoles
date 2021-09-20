import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginTop: "40px",
    alignItems: "center",

    //textAlign: "left",
    width: "350px",
    height: "350px",
  },
  txtclass: {
    padding: "8px",
  },
}));
const Login = () => {
  const classes = useStyles();
  let history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // history.push({ pathname: "/users" });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Paper elevation={3} className={classes.paper}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "20px" }}
        >
          Login Here
        </Typography>

        <TextField
          id="username"
          label="Username"
          variant="outlined"
          name="username"
          value={username}
          onChange={(e) => onInputChange(e)}
          className={classes.txtclass}
        />

        <TextField
          id="password"
          label="password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          className={classes.txtclass}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ textTransform: "none", margin: "20px" }}
        >
          Login
        </Button>
      </Paper>
    </form>
  );
};

export default Login;
