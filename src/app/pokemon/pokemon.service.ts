import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  liste: Pokemon[] = [];
  constructor() { 
    for(let i = 1; i < 500; i++) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/')
      .then(response => response.json())
      .then( (data) => {
        let types: string[] = [];
        for(let type of data.types) {
          types.push(type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1));
        }
        this.liste.push(
          {
              id: i,
              name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
              hp: +data.stats[0].base_stat,
              attack: +data.stats[1].base_stat,
              defense: +data.stats[2].base_stat,
              speatk: +data.stats[3].base_stat,
              spedef: +data.stats[4].base_stat,
              speed: +data.stats[5].base_stat,
              picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + i + ".png",
              types: types
          }
        )
        }
      )
      .catch(e => console.log(e));
      sleep(20).then(() => {});
    }
  }

  getPokemonList(): Pokemon[] {
    return this.liste;
  }
}
