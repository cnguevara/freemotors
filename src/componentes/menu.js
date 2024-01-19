import React from "react";
import "../styles/menuStyles.css";
import { Link } from "react-router-dom";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false,
    };
    this.toggleMostrar = this.toggleMostrar.bind(this);
  }
  toggleMostrar() {
    this.setState((prevState) => ({
      mostrar: !prevState.mostrar,
    }));
  }
  render() {
    return (
      <>
        <div className="container-fluid bg-danger py-3 fixed-top">
          <nav className="borde navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-danger" href="/">
              FreeMotors
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="contacto" className="nav-link EfectoCursor">
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="motocross" className="nav-link EfectoCursor">
                    Motocross
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="deportivas" className="nav-link EfectoCursor">
                    Deportivas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="scooter" className="nav-link EfectoCursor">
                    Scooter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="api" className="nav-link EfectoCursor">
                    API REST
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  type="submit"
                >
                  Buscar
                </button>
              </form>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
