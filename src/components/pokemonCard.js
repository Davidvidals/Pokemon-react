import { Component } from "react";

class PokemonCard extends Component{
    constructor(){
        super();
    }

    

    render(){
        let{image,name,weight,height,hp,atk,def } = this.props.pokemon
        return(
        <div id='pokemon-item-container' onClick={()=>this.props.handlePokemonClick(this.props.pokemon)}>
            <img src={image} alt='Pokemon Image'/>
            <div>Name: {name} </div>
            <div>Weight: {weight} lbs</div>
            <div>Height: {height} ft</div>
            <div>Health: {hp}</div>
            <div>Attack: {atk} </div>
            <div>Defense: {def} </div>
        </div>         
        )
    }
}

export default PokemonCard;