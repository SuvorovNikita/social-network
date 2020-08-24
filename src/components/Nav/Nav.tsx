import React from "react";

import classes from "./Nav.module.scss";


const Nav = () => {
    return <nav className={classes.nav}>
        <a className={`${classes.item} ${classes.active}`} href="/profile">Profile</a>
        <a className={classes.item} href="/dialogs">Messages</a>
        <a className={classes.item} href="/news"> News</a>
        <a className={classes.item} href="/music"> Music</a>
        <a className={classes.item} href="settings">Settings</a>
    </nav>
}

export default Nav;