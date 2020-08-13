import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HamburgerMenu from "../HamburgerMenu";

const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div>
        <HamburgerMenu toggleSideBar={props.toggleSideBar} />
      </div>
      <div>
        <Logo />
      </div>
      <nav className={css.hideOnDesktop}>
        <Menu />
      </nav>
    </header>
  );
};
export default Toolbar;
