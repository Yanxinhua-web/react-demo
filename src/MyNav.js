import React, { Component } from "react";

// props不可以被修改
// 借了别人的车可以去改装吗？不可以 单项数据流

export class MyNav extends Component {
  render() {
    console.log(this.props.nav);
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* 列表渲染 */}
        <ul>
          {this.props.nav.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MyNav;
