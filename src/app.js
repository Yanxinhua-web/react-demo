import React, { Component } from "react";
import Home from './Home';
import MyNav from "./MyNav";

export class App extends Component {

  render() {
    const nav1=['首页','视频','学习']
    const nav2=['web','java','python']
    return (
      <div>
        <h1> hello react Component</h1>
        <h2>学习react 心态最重要 哈哈哈哈</h2>
        <Home />
        <MyNav nav={nav1} title='nav1'></MyNav>
        <MyNav nav={nav2} title="nav2"></MyNav>

      </div>
    );
  }
}

export default App;
