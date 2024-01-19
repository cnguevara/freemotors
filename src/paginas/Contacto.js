import React from "react";
import "../styles/contactoStyles.css";
export default class Contacto extends React.Component {
  constructor(props){
    super(props);
    this.State = {
      nombre: "",
      correo: "",
      direccion: "",
    }
    this.submitted = this.submitted.bind(this);
    this.changed = this.changed.bind(this);
    this.changed2 = this.changed2.bind(this);
    this.changed3 = this.changed3.bind(this);
  }
  submitted(event){
    alert("Nombre: " + this.state.nombre + "\nCorreo: " + this.state.correo + "\nDirección: " + this.state.direccion);
    event.preventDefault();
  }
  changed(event){
    this.setState({
      nombre: event.target.value,
    })
  }
  changed2(event){
    this.setState({
      correo: event.target.value,
    })
  }
  changed3(event){
    this.setState({
      direccion: event.target.value,
    })
  }
  render() {
    return (
      <>
        <div className="text-center text-danger">
          <h1>Contáctanos</h1>
        </div>
        <div className="pl-2 text-dark text-center">
          <h6>
            Completa el siguiente formulario y nos pondremos en contacto contigo
          </h6>
        </div>
        <br></br>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-12 bg-dark p-4 bordeForm">
              <form onSubmit={this.submitted}>
                <div class="form-row">
                <div class="form-group col-md-12 text-light">
                    <label for="name">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Nombre"
                      onChange={this.changed}
                    />
                  </div>
                  <div class="form-group col-md-12 text-light">
                    <label for="inputEmail4">Correo</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Correo"
                      onChange={this.changed2}
                    />
                  </div>
                </div>
                <div class="form-group text-light">
                  <label for="inputAddress">Dirección</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Avenida 0"
                    onChange={this.changed3}
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12 text-light">
                    <label for="inputState">Provincia</label>
                    <select id="inputState" class="form-control">
                      <option selected>San José...</option>
                      <option>Cartago</option>
                      <option>Heredia</option>
                      <option>Limón</option>
                      <option>Alajuela</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label text-light" for="gridCheck">
                      Términos y Condiciones
                    </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-danger">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <footer class="bg-danger text-light p-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h3>Información de contacto</h3>
                <p>Correo electrónico: info@freemotors.com</p>
                <p>Teléfono: +506 6544-7788</p>
                <p>Dirección: San José, Central, Avenida 15</p>
              </div>
              <div class="col-md-6">
                <h3>Síguenos en las redes sociales</h3>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="text-light">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-light">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-light">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-light">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="text-center py-3">
            <p>&copy; 2023 Freemotors. Todos los derechos reservados.</p>
          </div>
        </footer>
      </>
    );
  }
}
