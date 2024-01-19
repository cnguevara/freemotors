import React from "react";
export default class Motocross extends React.Component{
    render(){
        return(
            <>
            <br/>
            <div>
                <h1 className="text-center text-danger">MOTOCROSS</h1>
            </div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-12 col-md-4">
                        <img src="/img/motocross_01.jpg" width="400"/>
                    </div>
                    <div className="d-none d-md-flex col-md-4">
                        <img src="/img/motocross_02.jpg" width="300"/>
                    </div>
                    <div className="d-none d-md-flex col-md-4">
                        <img src="/img/motocross_03.jpg" width="300"/>
                    </div>
                </div>
            </div>
            
            </>
        );
    }
}