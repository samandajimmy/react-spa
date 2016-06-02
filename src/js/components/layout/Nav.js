import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.menuArray = [];
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  getMenuArray() {
    let { menus } = this.props;
    this.menuArray = [];

    for (let key in menus) {
      const { location } = this.props;
      let activeClass = location.pathname.indexOf(key) > -1 ? "active" : "";
      this.menuArray.push(
        <li class={activeClass} key={key}>
          <Link to={key + "/list"} onClick={this.toggleCollapse.bind(this)}>{key.toUpperCase()}</Link>
        </li>
      );
    }
  }

  render() {
    const { location, menus } = this.props;
    const { collapsed } = this.state;
    const home = location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    this.getMenuArray();

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={home}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>HOME</Link>
              </li>
              {this.menuArray}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
