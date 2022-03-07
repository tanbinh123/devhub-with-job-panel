import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  DeveloperMode,
  Code,
  GitHub
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" htmlColor="#800080" />
            <a href="https://nodeweekly.com/" alt="" style={{ textDecoration: "none" }}><span className="sidebarListItemText">Feed</span></a>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" htmlColor="#000080" />
            <a href="https://www.digitalocean.com/community" style={{ textDecoration: "none" }}><span className="sidebarListItemText">Courses</span></a>
          </li>
          <li className="sidebarListItem">
            <DeveloperMode className="sidebarIcon" htmlColor="#FF1966" />
            <a href="https://devhub-forum.herokuapp.com" style={{ textDecoration: "none" }}><span className="sidebarListItemText">devHuß Wiki</span></a>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" htmlColor="#008080" />
            <a href="https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-interview-questions" style={{ textDecoration: "none" }}><span className="sidebarListItemText">Questions</span></a>
          </li>
          <li className="sidebarListItem">
            <Code className="sidebarIcon" htmlColor="#CD5C5C" />
            <span className="sidebarListItemText">Code Clinic</span>
          </li>
          <li className="sidebarListItem">
            <GitHub className="sidebarIcon" htmlColor="#8066FF" />
            <a href="https://github.com/search?q=React" style={{ textDecoration: "none" }}><span className="sidebarListItemText">Gitpedia</span></a>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" htmlColor="#00E64D" />
            <Link to={`/messenger/${user.username}`} style={{ textDecoration: "none" }}><span className="sidebarListItemText">Chats</span></Link>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" htmlColor="red" />
            <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0" style={{ textDecoration: "none" }}><span className="sidebarListItemText">V-lessons</span></a>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" htmlColor="#00AACC" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" htmlColor="#2980B9" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" htmlColor="#AF7AC5" />
            <a href="https://job-portal-koushik.netlify.app/" style={{ textDecoration: "none" }}><span className="sidebarListItemText">Jobs</span></a>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" htmlColor="#FF6666" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
