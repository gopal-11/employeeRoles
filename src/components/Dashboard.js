import React from "react";
import Permissions from "./Permissions";

import Login from "./Login";
import SubHeader from "./SubHeader";
import Roles from "./Roles";
import Features from "./Features";
import Groups from "./Groups";
import Users from "./Users";
import { Route, Switch } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <SubHeader />

      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/users" component={Users}></Route>
        <Route exact path="/groups" component={Groups}></Route>
        <Route exact path="/roles" component={Roles}></Route>
        <Route exact path="/features" component={Features}></Route>
        <Route exact path="/permissions" component={Permissions}></Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
