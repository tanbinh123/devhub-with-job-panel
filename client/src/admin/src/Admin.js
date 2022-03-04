import Leftbar from "./components/leftbar/Leftbar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Koti from "./pages/koti/Koti";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import JobList from "./pages/jobList/JobList";
import Job from "./pages/job/Job";
import Application from "./pages/application/Application";
import Footer from "./components/footer/Footer";

import List from "../../list/src/List";
import "../../list/src/index.scss";




function Admin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Leftbar />
        <Switch>
          <Route exact path="/">
            <Koti />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/vacancies">
            <JobList />
          </Route>
          <Route path="/job/:productId">
            <Job />
          </Route>
          <Route path="/application">
            <Application />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default Admin;
