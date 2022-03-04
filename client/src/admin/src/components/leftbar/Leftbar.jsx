import "./leftbar.css";
import {
  LineStyle,
  Timeline,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from "@material-ui/icons";
import WorkIcon from '@material-ui/icons/Work';

import BusinessIcon from '@material-ui/icons/Business';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <div className="leftbarMenu">
          <h3 className="leftbarTitle">Dashboard</h3>
          <ul className="leftbarList">
            <Link to="/" className="link">
            <li className="leftbarListItem active">
              <LineStyle className="leftbarIcon" />
              Home
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="leftbarListItem">
              <AccountCircleIcon className="leftbarIcon" />
              Profile
            </li></Link>
            <li className="leftbarListItem">
              <Timeline className="leftbarIcon" />
              Analytics
            </li>
            <Link to="/list" className="link">
            <li className="leftbarListItem">
              <WorkIcon className="leftbarIcon" />
              Jobs via devHuß
            </li></Link>
          </ul>
        </div>
        <div className="leftbarMenu">
          <h3 className="leftbarTitle">Quick Menu</h3>
          <ul className="leftbarList">
            <Link to="/users" className="link">
              <li className="leftbarListItem">
                <SupervisedUserCircleIcon className="leftbarIcon" />
                Users
              </li>
            </Link>
            <Link to="/vacancies" className="link">
              <li className="leftbarListItem">
                <BusinessIcon className="leftbarIcon" />
                Open Vacancies
              </li>
            </Link>
            <li className="leftbarListItem">
              <AttachMoney className="leftbarIcon" />
              Transactions
            </li>
            <li className="leftbarListItem">
              <BarChart className="leftbarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="leftbarMenu">
          <h3 className="leftbarTitle">Notifications</h3>
          <ul className="leftbarList">
            <li className="leftbarListItem">
              <MailOutline className="leftbarIcon" />
              Mail
            </li>
            <li className="leftbarListItem">
              <DynamicFeed className="leftbarIcon" />
              Feedback
            </li>
            <li className="leftbarListItem">
              <ChatBubbleOutline className="leftbarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="leftbarMenu">
          <h3 className="leftbarTitle">Staff</h3>
          <ul className="leftbarList">
            <li className="leftbarListItem">
              <WorkOutline className="leftbarIcon" />
              Manage
            </li>
            <li className="leftbarListItem">
              <Timeline className="leftbarIcon" />
              Analytics
            </li>
            <li className="leftbarListItem">
              <Report className="leftbarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}