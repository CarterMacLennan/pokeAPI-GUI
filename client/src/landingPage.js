import React from "react";
import Pikachu from "./images/pikachu.png";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <form className="row md-form form-inline main-search">
                    <div className="col-1"/>
                    <div className="col-2">
                        <img src={Pikachu} className="img-pikachu"/>
                    </div>
                    <div className="col-1"/>
                    <div className="col-7">
                        <input className="form-control form-control-lg w-100" type="text" placeholder="Search" aria-label="Search"/>
                    </div>   
                    <div className="col-1"/>
                </form>
            </div>
        );
    }
}