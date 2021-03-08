import React, { Component } from "react";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { id: 1, status: false, taskContent: "Pavalgyti!!!" },
        { id: 2, status: false, taskContent: "Padaryti namų darbus." },
        { id: 3, status: false, taskContent: "Pabaigti daryti namų darbus." },
      ],
    };
  }
  done = (idFor) => {
    this.setState((prevState) => ({
      list: prevState.list.map((obj) =>
        obj.id == idFor ? { ...obj, status: true } : obj
      ),
    }));
  };
  render() {
    return (
      <div className="container">
        {this.state.list.map((item) => (
          <div className="card" id={item.id} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.taskContent}</h5>
              <p className="card-text">Some quick example text.</p>
              <button
                className={
                  item.status == true ? "btn btn-success" : "btn btn-danger"
                }
                onClick={() => {
                  this.done(item.id);
                }}
              >
                {item.status == true ? "Done" : "Mark as done"}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Task;
