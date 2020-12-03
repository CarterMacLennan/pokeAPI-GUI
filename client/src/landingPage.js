import React from "react";
import Pikachu from "./images/pikachu.png";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="header-item col-2">
                                <img src={Pikachu} className="img-pikachu"/>
                            </div>
                            <div className="col-1"/>
                            <div className="header-item col-9">
                                <h1 class="display-6">PokeGui</h1>
                                <p class="lead">A simple GUI to help you navigate the popular PokeAPI.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="row md-form justify-content-center form-inline main-search">
                    <div className=" col-lg-8 col-sm-9 col-10">
                        <input className="form-control form-control-lg w-100" type="text" placeholder="Search" aria-label="Search"/>
                    </div>   
                </form>
                <div id="content-wrap">
                    <footer>
                        <div>Pikachu Icon made by <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    </footer>
                </div>
            </div>
        );
    }
}