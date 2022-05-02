import { Component } from 'react';
import './App.css';
import data from './data/sortedData';
import PokemonCard from './components/pokemonCard';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemonList: data.pokemon,
      selectedPokemon:{name: "No Pokemon Selected", image:'https://via.placeholder.com/100'},
      teamList: [] ,
      teamWeight :0,
      teamAtk:0,
      teamHp:0,
      teamDef:0
    }
  }

  handlePokemonClick=(pokemon)=>{
    let newArr = [...this.state.teamList, pokemon]

    this.setState({
      teamList : newArr ,
      teamWeight:this.state.teamWeight+ pokemon.weight 
    })
}

  render(){

    // console.log(this.state.pokemonList);
    // let pokemonElArr = this.state.pokemonList.map((pokemonItem)=>{
    //   return <img src={pokemonItem.image} alt='Pokemon Image'/>
    // });
    
    let pokemonNameElArr = this.state.pokemonList.map((pokemon)=>{
        return(
        <PokemonCard pokemon={pokemon} handlePokemonClick={this.handlePokemonClick}/>
        ) 
      });

      let pokemonTeamElArr = this.state.teamList.map((pokemon)=>{
        return (
          <div className='pokemon-team-container'>
           <img src ={pokemon.image} alt ='pokemon image'/>
           <div>
             {pokemon.name}
            </div> 
          </div>
          
        )
      })


    return (
      <div className='app' id='app-container'>

        <div class='animation'>
          <div class="box">
          <div class="inner">
            <span>Pokemon App</span>
          </div>
          <div class="inner">
            <span>Pokemon App</span>
          </div>
        </div>

        </div>
        
        


      
       {/* <div class='selected'>
         <h2>Currently Selected Pokemon</h2>
         <img src={this.state.selectedPokemon.image} alt='selected pokemon'/>
         <div>{this.state.selectedPokemon.name}</div>
       </div> */}
       
         <h2>Team</h2>
        <div id='pokemon-team-container'>
         {pokemonTeamElArr}
       </div>
       <h3 class='team'>Team Stats</h3>
        <div>Weight:{this.state.teamWeight}</div>
       
       <div id = 'pokemon-list-container'>
         {pokemonNameElArr}
       </div>
       {/* {pokemonElArr} */}
      </div>
    )
  }
}

export default App;
