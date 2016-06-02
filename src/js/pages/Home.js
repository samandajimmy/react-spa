import React from "react";

import * as SwapiActions from "../actions/SwapiActions";
import SwapiStore from "../stores/SwapiStore";
import Layout from "./Layout";
import BoxMenu from "../components/BoxMenu";

export default class Home extends Layout {

  render() {
    var boxMenuComp = []
    const { menus } = this.state;

    for (let key in menus) {
      boxMenuComp.push(
        <BoxMenu key={key} link={key + "/list"} title={key.toUpperCase()} />
      );
    }

    return (
      <div>
        <h1>Star Wars Fan Base</h1>

        <div class="row">
          {boxMenuComp}
        </div>

      </div>
    );
  }
}
