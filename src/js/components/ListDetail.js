import React from "react";
import { IndexLink, Link } from "react-router";

export default class ListDetail extends React.Component {
  constructor(props) {
    super();
  }

  capitalize(str) {
    str = str.replace(/_/g,' ');
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  render() {
    var detailEl = [];
    var exception = ['created', 'edited', 'url', 'homeworld'];
    const { data } = this.props;
    for (let key in data) {
      if (exception.indexOf(key) > -1)
        continue;

      if (Array.isArray(data[key]))
        continue;

      const eachEl = <li key={key}><span>{this.capitalize(key)}:</span><span>{data[key]}</span></li>;
      detailEl.push(eachEl);
    }
    return (
      <div class="item  col-xs-4 col-lg-4 grid-group-item">
        <div class="thumbnail">
          <div class="caption">
            <ul>
              {detailEl}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
