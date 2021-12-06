import React from "react"
import {PATH} from "./Routes"
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={(navData) => navData.isActive ? s.active : s.link}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}
                     className={(navData) => navData.isActive ? s.active : s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={(navData) => navData.isActive ? s.active : s.link}>Junior +</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
