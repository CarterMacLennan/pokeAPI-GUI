import React from "react";
import Pikachu from "./images/pikachu.png";
import axios from "axios";
import Card from  "./card";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            pokemon: [],
            isLoading: false,
            enter: false,
            search: "",
        }
    }

    handleSearchRequest = async (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            let {data:{results}} = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=386");
            let pokeNames = results.map(elem => elem.name);

            let filteredNames = pokeNames.filter(name => name.includes(e.target.value));
            this.loadPokemon(filteredNames);
        }
    }

    loadPokemon = async (filteredNames) => {
        let filteredPokemon =[];
        this.setState({isLoading: true});

        await Promise.all(filteredNames.map(pokeName =>
            axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeName)
            .then(res => { filteredPokemon.push(res.data);})
        ));

        this.setState({pokemon: filteredPokemon, isLoading: false});
    }

    getResults = () => {
        if(this.state.isLoading){
            return (
                <div className = "centered">
                    <div className = "spinner-border spinner-border-xl text-light"></div>
                </div>
            );
        } 
        else if (this.state.pokemon !=null){
            (this.state.pokemon).forEach(e => console.log(e));
            return (
                <div className="container">
                    <div className="results row">
                        {(this.state.pokemon).map((data, index) => {
                            return(
                                <div classkey={index} className="col-lg-3 col-md-4">
                                    <Card pokemon={data} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="header-item col-2">
                                <img src={Pikachu} className="img-pikachu" alt="Pikachu"/>
                            </div>
                            <div className="col-1"/>
                            <div className="header-item col-9">
                                <h1 className="display-6">PokeGui</h1>
                                <p className="lead">A simple GUI to help you navigate the popular PokeAPI.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row md-form justify-content-center form-inline main-search">
                    <div className=" col-lg-8 col-sm-9 col-10">
                        <input type="text" className="form-control form-control-lg w-100" onKeyDown={this.handleSearchRequest} placeholder="Search"/>
                    </div>   
                </div>
                {this.getResults()}
            </div>
        );
    }
}