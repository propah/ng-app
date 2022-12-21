import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonsList: Pokemon[] = this.pokeService.getPokemonList();

  constructor(private router: Router, private pokeService: PokemonService) { }

  goToPokemon(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id];
    console.log(link);
    this.router.navigate(link);
  }
}
