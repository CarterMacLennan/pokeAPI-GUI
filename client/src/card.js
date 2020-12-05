import React from "react";

export default function Card(props){
    return (
        <div className="card">
            {/* <img src={props.pokemon.sprites.other.dream_world.front_default} className="card-img-top mx-auto d-block proj-image" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title"><strong>{props.pokemon.name}</strong></h5>
            </div>
        </div> 
    );
}