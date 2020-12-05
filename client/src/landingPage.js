import React from "react";
import Pikachu from "./images/pikachu.png";
import axios from "axios";
import Card from  "./card";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pokemon: null,
            loading: false,
        }
    }
    
    async componentDidMount() {
        this.setState({loading : true});
        try {
            let pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
            this.setState({loading : false, pokemon: pokemon.data.results});
            console.log([pokemon.data.results]);
        } catch(err) {
            console.log(err);
        }
    }

    getResults = () => {
        if(this.state.loading !== true && this.state.pokemon !== null){
            let pokemon = this.state.pokemon;
            console.log(pokemon);
            return (
                <div className="container">
                    <div className="results row">
                        {(this.state.pokemon).map((data, index) => 
                            <div classkey={index} className="col-lg-3 col-md-4">
                                <Card pokemon={data} />
                            </div>
                        )}
                    </div>
                </div>
            );
        } 
        else {
            return (
                <div className = "centered">
                    <div className = "spinner-border spinner-border-xl text-light"></div>
                </div>
            );
        }
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
                                <h1 className="display-6">PokeGui</h1>
                                <p className="lead">A simple GUI to help you navigate the popular PokeAPI.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="row md-form justify-content-center form-inline main-search">
                    <div className=" col-lg-8 col-sm-9 col-10">
                        <input className="form-control form-control-lg w-100" type="text" placeholder="Search" aria-label="Search"/>
                    </div>   
                </form>
                {this.getResults()}
            </div>
        );
    }
}