import React from "react";

export default function Card(props){
    console.log(props);
    return (
        <div className="card">
            <img src={props.pokemon.sprites.front_default} className="card-img-top mx-auto d-block proj-image" alt="..." />
            <div className="card-body">
                <h5 className="card-title"><strong>{props.pokemon.name}</strong></h5>
            </div>
        </div> 
    );
}