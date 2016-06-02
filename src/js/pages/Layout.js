import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import * as SwapiActions from "../actions/SwapiActions";
import SwapiStore from "../stores/SwapiStore";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.getMenu = this.getMenu.bind(this);
    SwapiActions.getMenus();
    this.state = {
      menus: SwapiStore.getMenu(),
    };
  }

  componentWillMount() {
    SwapiStore.on("change", this.getMenu);
  }

  componentWillUnmount() {
    SwapiStore.removeListener("change", this.getMenu);
  }

  getMenu() {
    this.setState({
      menus: SwapiStore.getMenu(),
    });
  }

  render() {
    const { location } = this.props;
    const { menus } = this.state;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav location={location} menus={menus} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
          <Footer location={location} />
        </div>
      </div>

    );
  }
}
