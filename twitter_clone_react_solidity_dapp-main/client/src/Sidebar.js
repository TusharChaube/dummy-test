import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";

function Sidebar() {

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <Link href="https://twitter.com/explore" variant="body2">
      <SidebarOption Icon={SearchIcon} text="Explore"/> 
      </Link> 
      <Link href="https://twitter.com/notifications" variant="body2">
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      </Link>
      <Link href="https://twitter.com/messages" variant="body2">
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      </Link>
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <Link href="https://twitter.com/tushar_chaube/lists" variant="body2">
      <SidebarOption Icon={ListAltIcon} text="Lists"/>
      </Link>
      <Link href="https://twitter.com/tushar_chaube" variant="body2">
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
      </Link>
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
