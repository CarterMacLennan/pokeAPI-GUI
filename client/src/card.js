import React from "react";



export default function Card(props){
    return (
        <div className={"card card-bg-"+props.pokemon.types[0].type.name}>
            <div className={"card-image-container card-image-container-"+props.pokemon.types[0].type.name}>
                <img src={props.pokemon.sprites.other['official-artwork'].front_default} alt={props.pokemon.name} className="card-image"/>   
            </div>
        
            <figcaption className="card-caption">
                <h1 className="card-name">{props.pokemon.name.toUpperCase()}</h1>
                <h3 className={"card-type card-type-" + props.pokemon.types[0].type.name}>{props.pokemon.types[0].type.name}</h3>
                <table className="card-stats">
                    <tbody>
                        {props.pokemon.stats.map(pokeStats => {
                            return(
                                <tr>
                                    <th>{(pokeStats.stat.name).replace(/-/g, ' ')}</th>
                                    <td>{pokeStats.base_stat}</td>
                                </tr>
                            );
                        })}
                    </tbody>                
                </table>
                <div className="abilities">
                    <div className="ability">
                        <p className="card-label">Ability</p>
                        <li className="ability-name">{(props.pokemon).abilities[0].ability.name}</li>
                        {((props.pokemon).abilities.length>2)?<li className="ability-name">{(props.pokemon).abilities[1].ability.name}</li> : <p className="ability-name">&nbsp;</p>}
                    </div>
                    <div className="ability">
                        <p className="card-label">Hidden Ability</p>
                        <li className="ability-name">{(props.pokemon.abilities)[props.pokemon.abilities.length-1].ability.name}</li>
                    </div>
                </div>
            </figcaption>
        </div>
    );
}