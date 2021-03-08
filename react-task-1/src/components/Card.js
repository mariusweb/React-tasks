import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, image, desc } = this.props;
    return (
      // <div className="col-3">
      //   <img src={image} alt="" />
      //   <h1>{name}</h1>
      // </div>
      <div className="card m-2">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
