import React from "react";

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
            <a class="navbar-brand" href="#"><h4>PokeGUI</h4></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navbar-dark" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Favourites</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Search History</a>
                </li>
                </ul>
            </div>
        </nav>
        );
    }
}