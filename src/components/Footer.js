import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">Footer</a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">Contact Us</a>
          
          </div>
        </nav>

        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand"></a>
           
          
          </div>
        </nav>

        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand"></a>
          
          </div>
        </nav>

        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            
            <h1 className="text text-bg-dark bg-dark">NewsWorld:- Real-Time News Telecast Application</h1>
          
          </div>
        </nav>


      </div>
    );
  }
}

export default Footer;
