import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted bg-white">
        <div className="container">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>
            Album example is © Bootstrap, but please download and customize it
            for yourself!
          </p>
          <p>
            New to Bootstrap? <a href="../../">Visit the homepage</a> or read
            our <a href="../../getting-started/">getting started guide</a>.
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
