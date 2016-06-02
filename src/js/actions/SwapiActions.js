import dispatcher from "../dispatcher";
import SwapiStore from "../stores/SwapiStore";

export function getMenus() {
  dispatcher.dispatch({type: "FETCH_MENUS"});
  SwapiStore.getRootMenu()
  .then(function(rootMenu){
    dispatcher.dispatch({type: "RECEIVE_MENUS", menus: rootMenu});
  });
}

export function getLists(url, flag) {
  if (!flag){
    SwapiStore.getJSON(url + "?format=json")
    .then(function(lists){
      dispatcher.dispatch({type: "RECEIVE_LISTS", lists: lists});
    }); 
  }
}
