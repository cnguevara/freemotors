import React from "react";
export default class Deportivas extends React.Component {
  render() {
    return (
      <>
        <br />
        <div>
          <h1 className="text-center text-danger">DEPORTIVAS</h1>
        </div>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-12 col-md-4">
              <img src="/img/deportivas_01.jpg" width="300" height={500} />
            </div>
            <div className="d-none d-md-flex col-md-4">
              <img src="/img/deportivas_02.jpg" width="300" height={500} />
            </div>
            <div className="d-none d-md-flex col-md-4">
              <img src="/img/deportivas_03.jpg" width="300" height={500} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
