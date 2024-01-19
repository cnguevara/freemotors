import React from "react";

export default class Scooter extends React.Component {
  render() {
    return (
      <>
        <br />
        <div>
          <h1 className="text-center text-danger">SCOOTER</h1>
        </div>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12 col-md-4">
              <img src="/img/scooter_01.jpg" width="400" />
            </div>
            <div className="d-none d-md-flex col-md-4">
              <img src="/img/scooter_02.jpg" width="300" />
            </div>
            <div className="d-none d-md-flex col-md-4">
              <img src="/img/scooter_03.jpg" width="300" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
