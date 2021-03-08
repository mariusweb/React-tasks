import React, { Component } from "react";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      hate: 0,
    };
  }
  likes = () => {
    let number = ++this.state.like;
    this.setState({
      type: number,
    });
  };
  hates = () => {
    let number = ++this.state.hate;
    this.setState({
      type: number,
    });
  };
  reset = () => {
    this.setState({
      like: 0,
      hate: 0,
    });
  };
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F976%2F1*bBPbDmdsf67UcYDhQgcVSw.gif&f=1&nofb=1"
          alt="React image"
        />
        <div className="card-body">
          <h5 className="card-title">Post</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success m-1" onClick={this.likes}>
            Like {this.state.like}
          </a>
          <a href="#" className="btn btn-danger m-1" onClick={this.hates}>
            Hate {this.state.hate}
          </a>
          <a href="#" className="btn btn-info m-1" onClick={this.reset}>
            Reset
          </a>
        </div>
      </div>
    );
  }
}
export default Post;
