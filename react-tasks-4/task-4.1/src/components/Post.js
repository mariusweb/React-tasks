import React, { useState } from "react";

function Post() {
  const [like, setLike] = useState(0);
  const [hate, setHate] = useState(0);

  const reset = () => {
    setLike(0);
    setHate(0);
  };

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
        <a
          href="#"
          className="btn btn-success m-1"
          onClick={() => setLike(like + 1)}
        >
          Like {like}
        </a>
        <a
          href="#"
          className="btn btn-danger m-1"
          onClick={() => setHate(hate + 1)}
        >
          Hate {hate}
        </a>
        <a href="#" className="btn btn-info m-1" onClick={() => reset()}>
          Reset
        </a>
      </div>
    </div>
  );
}
export default Post;
