import React from "react";

import classes from "./Header.module.scss";
import logo from "./../../assets/img/logo.png"


const Header = () => {
    return <header className={classes.header}>
        <img src={logo} alt=""/>
    </header>
}
export default Header;