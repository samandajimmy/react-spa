import React from "react";
import { IndexLink, Link } from "react-router";

export default class BoxMenu extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div class="col-lg-3 col-md-6 text-center">
          <h3><Link to={this.props.link}>{this.props.title}</Link></h3>
      </div>
    );
  }
}
