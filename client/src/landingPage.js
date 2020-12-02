import React from "react";
import Pikachu from "./images/pikachu.png";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <form className="justify-content-center md-form form-inline main-search">
                    <img src={Pikachu} height="175px" width="175px"/>
                    <input className="form-control form-control-lg w-50" type="text" placeholder="Search" aria-label="Search"/>
                    <i className="fas fa-search" aria-hidden="true"></i>
                </form>
            </div>
        );
    }
}