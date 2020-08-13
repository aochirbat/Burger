import React, { Component } from "react";
import style from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/Sidebar";
class App extends Component {
  state = {
    showsSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showsSideBar: !prevState.showsSideBar };
    });
  };

  render() {
    return (
      <div className="App">
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showsSideBar={this.state.showsSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={style.Content}>
          <BurgerPage />
        </main>
      </div>
    );
  }
}
export default App;
