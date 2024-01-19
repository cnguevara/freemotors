import React from "react";

export default class API extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lanzamientos: []
        }
    }
    componentDidMount(){
        fetch("https://musicbrainz.org/ws/2/release?artist=9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa&fmt=json")
        .then(res => res.json())
        .then((result)=> {
            console.log(result)
            this.setState({
                lanzamientos: result.releases
            });
        })
    }
    render(){
        return(
            <>
            {this.state.lanzamientos.map((lanzamiento) => (
                <span className="">
                <span className="ml-2"> {lanzamiento.title}  </span>
                <br></br>
                <hr></hr>
                <span className="ml-2"> {lanzamiento.date} </span>
                </span>
            ))}
            </>
        );
    }
}