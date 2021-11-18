import React, { Component } from "react";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

import classes from "./App.module.css";
class App extends Component {
  render() {
    return (
      <div className={classes.app}>
        <NavBar />
        <Search />
      </div>
    );
  }
}

export default App;
