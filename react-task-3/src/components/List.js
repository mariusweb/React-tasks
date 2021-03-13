import React from "react";

function List(props) {
  const users = props.users;

  return users.map((user) => {
    return user.isEdit ? (
      <div key={user.id} className="text-left border rounded p-4 mr-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.editingForm(user.id);
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Vardas</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              defaultValue={user.name}
              onChange={(e) => {
                props.handleChangeForLi(e.target.value, e.target.name, user.id);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Slapyvardis</label>
            <input
              className="form-control"
              type="text"
              name="userName"
              id="surname"
              defaultValue={user.userName}
              onChange={(e) => {
                props.handleChangeForLi(e.target.value, e.target.name, user.id);
              }}
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
    ) : (
      <div key={user.id}>
        <div key={user.id} className="border-bottom my-3">
          <ul>
            <li className="d-flex justify-content-between">
              <p>
                {user.name} {user.userName}
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    props.editUser(user.id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    props.deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  });
}
export default List;
