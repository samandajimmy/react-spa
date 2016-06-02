import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class SwapiStore extends EventEmitter {
  constructor() {
    super();
    this.menus;
    this.lists;
  }

  getRootMenu() {
    var d = Promise.defer();
    this.getJSON('http://swapi.co/api/?format=json')
    .then(function(data){
      d.resolve(data);
    })
    return d.promise;
  }

  getMenu() {
    return this.menus;
  }

  getList() {
    return typeof this.lists == 'undefined' ? 'undefined' : this.lists.results;
  }

  getJSON (url) {
    'use strict';
    var xhr = new XMLHttpRequest();
    var d = Promise.defer();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          d.resolve(JSON.parse(xhr.responseText));
        } else {
          d.reject(xhr.responseText);
        }
      }
    };
    xhr.open('GET', url);
    xhr.send();
    return d.promise;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_MENUS": {
        this.menus = action.menus;
        this.emit('change');
        break;
      }
      case "RECEIVE_LISTS": {
        this.lists = action.lists;
        this.emit('changeList');
        break;
      }
    }
  }

}

const swapiStore = new SwapiStore;
dispatcher.register(swapiStore.handleActions.bind(swapiStore));

export default swapiStore;
