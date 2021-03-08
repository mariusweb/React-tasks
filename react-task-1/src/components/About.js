import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="container d-flex flex-column justify-content-center align-items-center w-50 text-center my-4">
        <h1 className="display-4">Web Shop</h1>
        <p className="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, eos.
          Ducimus obcaecati necessitatibus aperiam! Consequatur delectus natus
          fugit iure explicabo! Necessitatibus ex quas sunt omnis enim rem nisi
          asperiores eos.
        </p>
        <div className="d-flex">
          <a href="#" className="btn btn-primary my-2">
            Main call to action
          </a>
          <a href="#" className="btn btn-secondary my-2">
            Secondary action
          </a>
        </div>
      </section>
    );
  }
}
export default About;
