import React from "react";
import "../styles/motosStyles.css"
var descripcionView = "Descripción";
export default class Motos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrar: false,
      mostrar2: false,
      mostrar3: false,
    };
    this.toggleMostrar = this.toggleMostrar.bind(this);
    this.toggleMostrar2 = this.toggleMostrar2.bind(this);
    this.toggleMostrar3 = this.toggleMostrar3.bind(this);
  }
  toggleMostrar() {
    this.setState((prevState) => ({
      mostrar: !prevState.mostrar,
    }));
  }
  toggleMostrar2() {
    this.setState((prevState) => ({
      mostrar2: !prevState.mostrar2,
    }));
  }
  toggleMostrar3() {
    this.setState((prevState) => ({
      mostrar3: !prevState.mostrar3,
    }));
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row bg-light p-3 borde">
            <div className="col-12 col-md-6  text-center text-dark d-md-flex align-items-center">
              <h2>RIEJU MARATHON 125 PRO</h2>
            </div>
            <div className="col-12 col-md-6 text-center d-md-flex justify-content-md-end">
              <img
                className="bg-light p-2 borde mb-1 efectoHover"
                width="300"
                height="200s"
                src="/img/moto01.jpg"
                alt="Moto"
              />
              <img
                className="d-none d-md-block bg-light p-2 borde mb-1"
                width="300"
                height="200s"
                src="/img/moto01.2.jpg"
                alt="Moto"
              />
              <img
                className="d-none d-md-block bg-light p-2 borde mb-1"
                width="300"
                height="200s"
                src="/img/moto01.3.jpg"
                alt="Moto"
              />
            </div>
            <div className="col-12 d-flex justify-content-center justify-content-md-start">
              <a
                className="btn btn-outline-danger text-dark EfectoCursor"
                onClick={this.toggleMostrar}
              >
                {descripcionView}
              </a>
            </div>
            <div
              className={
                "d-none col-12 text-dark " +
                (this.state.mostrar ? "d-flex" : "")
              }
            >
              <p className="mr-md-5 pr-md-5 bg-light p-2 borde">
                La Rieju Marathon 125 Pro es una trail enduro desarrollada para
                disfrutar en el off-road gracias a su potente motor y a su
                completa parte ciclo. El propulsor empleado es un Minarelli de
                refrigeración líquida, de cuatro válvulas y arranque eléctrico
                que proporciona la suficiente potencia para lograr un alto nivel
                de diversión, pero sin resultar excesivamente potente como para
                asustar a los pilotos con menos experiencia.Emplea un chasis de
                doble viga de acero junto a unas suspensiones bien planteadas.
                Delante, una horquilla invertida R16V con barras de 41 mm;
                detrás, un monoamortiguador con depósito de gas separado. Los
                frenos son Galfer Wave, el delantero de 300 mm y pinzas de doble
                pistón.
              </p>
            </div>
          </div>

          <div className="row bg-light p-3 borde">
            <div className="col-12 col-md-6  text-center text-dark d-md-flex align-items-center">
              <h2>HONDA CB650R</h2>
            </div>
            <div className="col-12 col-md-6 text-center d-md-flex justify-content-md-end">
              <img
                className="bg-light p-2 borde mb-1 efectoHover"
                width="300"
                height="200"
                src="/img/moto02.jpg"
                alt="Moto"
              />
              <img
                className="d-none d-md-block bg-light p-2 borde mb-1"
                width="300"
                height="200s"
                src="/img/moto02.2.jpg"
                alt="Moto"
              />
              <img
                className="d-none d-md-block bg-light p-2 borde mb-1"
                width="300"
                height="200s"
                src="/img/moto02.3.jpg"
                alt="Moto"
              />
            </div>
            <div className="col-12 d-flex justify-content-center justify-content-md-start">
              <a
                className="btn btn-outline-danger text-dark EfectoCursor"
                onClick={this.toggleMostrar2}
              >
                {descripcionView}
              </a>
            </div>
            <div
              className={
                "d-none col-12 text-dark " +
                (this.state.mostrar2 ? "d-flex" : "")
              }
            >
              <p className="mr-md-5 pr-md-5 bg-light p-2 borde">
                Honda refresca y dota de más tecnología a la CB650R 2024, su
                naked limitable para el carnet A2, con el objetivo de que sea
                una de las propuestas más atractivas del segmento. Y hace
                hincapié en en que esto sea así dotándola de su último y más
                sofisticado sistema de transmisión denominado E-Clutch, toda una
                revolución ya que ser trata de un cambio automático para motos
                de marchas. Tenemos por tanto una moto de estilo contemporáneo
                que destila buen gusto y deportividad gracias a una parte ciclo
                de contrastada calidad y a un motor 'tetra' de interesantes
                prestaciones.
              </p>
            </div>
          </div>

          <div className="row bg-light p-3 borde">
            <div className="col-12 col-md-6  text-center text-dark d-md-flex align-items-center">
              <h2>YAMAHA YZF-R7</h2>
            </div>
            <div className="col-12 col-md-6 text-center d-md-flex justify-content-md-end">
              <img
                className="bg-light p-2 borde mb-1 efectoHover"
                width="300"
                height="200s"
                src="/img/moto03.jpg"
                alt="Moto"
              />
              <img
                className="d-none d-md-block bg-light p-2 borde mb-1"
                width="300"
                height="200s"
                src="/img/moto03.2.jpg"
                alt="Moto"
              />
              <img
                className="d-none d-md-block bg-light p-2 borde mb-1"
                width="300"
                height="200s"
                src="/img/moto03.3.jpg"
                alt="Moto"
              />
            </div>
            <div className="col-12 d-flex justify-content-center justify-content-md-start">
              <a
                className="btn btn-outline-danger text-dark EfectoCursor"
                onClick={this.toggleMostrar3}
              >
                {descripcionView}
              </a>
            </div>
            <div
              className={
                "d-none col-12 text-dark " +
                (this.state.mostrar3 ? "d-flex" : "")
              }
            >
              <p className="mr-md-5 pr-md-5 bg-light p-2 borde">
                La Yamaha YZF-R7 es la deportiva de la marca japonesa que
                aprovecha el versátil motor CP2 de 689 cc que se utiliza en la
                MT-07, Tenere 700, XSR700 y Tracer 700. Se trata de una montura
                que mantiene la estética de la familia YZF-R de la marca
                japonesa pero que dinámicamente es bastante más apta para
                pilotos con menos experiencia aunque con ganas de disfrutar de
                la deportividad de una moto así. Se ofrece una versión de 35 kW
                para los usuarios del carnet A2. En 2023 se mantiene sin cambios
                con respecto a la versión precedente, desapareciendo de la
                oferta la versión 60º Aniversario con la que conmemoraron (en
                2022) los 60 años de Yamaha en los mundiales de velocidad.
              </p>
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
