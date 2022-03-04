import "./topbar.css";
import { Search, Person, Chat, Notifications, ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls"
import DeviceHubSharpIcon from '@material-ui/icons/DeviceHubSharp';

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { dispatch } = useContext(AuthContext);
  const handleClick = () => { logoutCall(dispatch) };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"><img src={logo} alt="devHuß" height="23px" width="32px" />devHuß</span>
          </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <Link to="/search"><Search className="searchIcon" /></Link>
          <input
            placeholder="Search for networks, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={`/`}>
          <span className="topbarLink">Homepage</span></Link>
          <Link to={`/timeline`}><span className="topbarLink2"> <DeviceHubSharpIcon /></span></Link>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Link to={`/messenger/${user.username}`} className="messageIcon">
              <Chat />
            </Link>
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">10</span>
          </div>
        </div>
          <Link to={`/profile/${user.username}`}>
          <img src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            } alt="" className="topbarImg" />
        </Link>
        <span className= "topbarSignout" onClick = {handleClick}><ExitToApp /></span>
      </div>
    </div>
  );
}


