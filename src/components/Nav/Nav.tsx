import React from "react";

import classes from "./Nav.module.scss";


const Nav = () => {
    return <nav className={classes.nav}>
        <a className={`${classes.item} ${classes.active}`} href="">Profile</a>
        <a className={classes.item} href="">Messages</a>
        <a className={classes.item} href="">New</a>
        <a className={classes.item} href="">Music</a>
        <a className={classes.item} href="">Settings</a>
    </nav>
}

export default Nav;