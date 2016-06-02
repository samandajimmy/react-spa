import React from "react";
import { IndexLink, Link } from "react-router";


export default class Footer extends React.Component {

  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <Link to="home">Back to Home</Link>
          </div>
        </div>
      </footer>
    );
  }
}
