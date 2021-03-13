import React, { Component } from "react";
import List from "./List";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: "",
      userName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleChange(evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

  myHandeForm = (e) => {
    e.preventDefault();
    const data = [
      ...this.state.users,
      {
        id: Date.now(),
        name: this.state.name,
        userName: this.state.userName,
        isEdit: false,
      },
    ];
    this.setState({
      users: data,
      name: "",
      userName: "",
    });
  };

  deletePerson = (personId) => {
    const data = this.state.users.filter((user) => user.id !== personId);
    this.setState({
      users: data,
    });
  };
  editPerson = (personId) => {
    const data1 = this.state.users.map((user) => {
      if (personId === user.id) {
        user.isEdit = true;
      }
      return user;
    });

    this.setState({
      users: data1,
    });
  };
  setUpdate = (text, textName, userId) => {
    const users = this.state.users.map((user) => {
      if (user.id === userId) {
        user[textName] = text;
      }
      return user;
    });
    this.setState({
      users: users,
    });
  };
  editHandleForm = (editingId) => {
    const data = this.state.users.map((user) => {
      if (editingId === user.id) {
        user.isEdit = false;
      }
      return user;
    });
    this.setState({
      users: data,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-left border rounded p-4 mr-2">
            <h2>Registracijos informacija</h2>
            <form onSubmit={this.myHandeForm}>
              <div className="form-group">
                <label htmlFor="name">Vardas</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="surname">Slapyvardis</label>
                <input
                  className="form-control"
                  type="text"
                  name="userName"
                  id="surname"
                  value={this.state.userName}
                  onChange={this.handleChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-primary"
                name="submit"
                value="Pateikti"
              />
            </form>
          </div>
          <div className="col border rounded p-4 ml-2">
            <h2>Vartotojų sąrašas</h2>

            <List
              users={this.state.users}
              deleteUser={this.deletePerson}
              editUser={this.editPerson}
              handleChangeForLi={this.setUpdate}
              editingForm={this.editHandleForm}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
