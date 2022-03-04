import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Timeline from "./pages/timeline/Timeline";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import Admin from "./admin/src/Admin";
import User from "./admin/src/pages/user/User";
import UserList from "./admin/src/pages/userList/UserList";
import NewUser from "./admin/src/pages/newUser/NewUser";
import JobList from "./admin/src/pages/jobList/JobList";
import Job from "./admin/src/pages/job/Job";
import Application from "./admin/src/pages/application/Application";
import Koti from "./admin/src/pages/koti/Koti";
import Search from "./components/search/Search";

import List from "./list/src/List";
import "./list/src/App.css";
import "./list/src/index.scss";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/timeline">
          {user ? <Timeline /> : <Register />}
        </Route>
        <Route path="/koti">
          <Koti />
        </Route>
        <Route path="/search">
          <Search />
        </Route>

        <Route path="/admin/src/pages/users">
          <UserList />
        </Route>
        <Route path="/admin/src/pages/user/:userId">
          <User />
        </Route>
        <Route path="/admin/src/pages/newUser">
         <NewUser />
        </Route>
        <Route path="/admin/src/pages/vacancies">
         <JobList />
        </Route>
        <Route path="/admin/src/pages/job/:productId">
         <Job />
        </Route>
        <Route path="/admin/src/pages/application">
          <Application />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>

      <Route path="/list">
          <List />
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
