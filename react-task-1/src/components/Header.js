import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="bg-dark text-white">
        <div className="container d-flex justify-content-between">
          <div className="logo-field d-flex flex-row align-items-center">
            <i className="fas fa-camera "></i>
            <h3 className="m-3">
              <strong>Album</strong>
            </h3>
          </div>
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h4 className="text-white">Collapsed content</h4>
                <span className="text-muted">
                  Toggleable via the navbar brand.
                </span>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
