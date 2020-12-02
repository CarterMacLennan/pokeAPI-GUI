import React from "react";

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <a className="navbar-brand" href="/"><h4>PokeGUI</h4></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-dark" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/favourites">Favourites</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}