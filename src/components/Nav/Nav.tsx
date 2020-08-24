import React from "react";

import classes from "./Nav.module.scss";
import {NavLink} from "react-router-dom";


const Nav = () => {
    return <nav className={classes.nav}>
        <NavLink className={classes.item} activeClassName={classes.active} to="/profile">Profile</NavLink>
        <NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Messages</NavLink>
        <NavLink className={classes.item} activeClassName={classes.active} to="/news"> News</NavLink>
        <NavLink className={classes.item} activeClassName={classes.active} to="/music"> Music</NavLink>
        <NavLink className={classes.item} activeClassName={classes.active} to="settings">Settings</NavLink>
    </nav>
}

export default Nav;