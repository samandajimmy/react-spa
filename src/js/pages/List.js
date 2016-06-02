import React from "react";

import * as SwapiActions from "../actions/SwapiActions";
import SwapiStore from "../stores/SwapiStore";
import Layout from "./Layout";
import ListDetail from "../components/ListDetail";

export default class List extends Layout {
  constructor(props) {
    super();
    this.getList = this.getList.bind(this);
    this.flag = false
    this.state = {
      menus: SwapiStore.getMenu(),
      lists: SwapiStore.getList()
    };
  }

  componentWillMount() {
    super.componentWillMount();
    SwapiStore.on("changeList", this.getList);
    const { menus } = this.state;
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    SwapiStore.removeListener("changeList", this.getList);
  }

  getMenu() {
    this.setState({
      menus: SwapiStore.getMenu(),
    });
    const { menus } = this.state;
  }

  getList() {
    this.setState({
      lists: SwapiStore.getList(),
    });
    this.flag = false;
  }

  render() {
    var listComp = []
    const { lists, menus } = this.state;
    const { menu } = this.props.params;
    const usedMenu = menu.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    if (typeof menus !== 'undefined'){
      SwapiActions.getLists(menus[this.props.params.menu], this.flag);
      this.flag = true
    }

    for (let key in lists) {
      listComp.push(
        <ListDetail key={key} data={lists[key]} />
      );
    }

    return (
      <div>
        <h1>Star Wars {usedMenu} Section</h1>
        <div id="products" class="row list-group">
          {listComp}
        </div>
      </div>
    );
  }
}
