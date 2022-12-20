import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  goBack() {
    window.history.back();
  }

  pokemonList: Pokemon[] = POKEMONS;
  pokemon?: Pokemon;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == parseInt(pokemonId));
    }
  }
}