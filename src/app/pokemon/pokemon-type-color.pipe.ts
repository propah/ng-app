import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pokemonTypeColor'})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Fire':
        color = 'red lighten-1';
        break;
      case 'Water':
        color = 'blue lighten-1';
        break;
      case 'Grass':
        color = 'green lighten-1';
        break;
      case 'Bug':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Flying':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fairy':
        color = 'pink lighten-4';
        break;
      case 'Psychic':
        color = 'deep-purple darken-2';
        break;
      case 'Electric':
        color = 'lime accent-1';
        break;
      case 'Fighting':
        color = 'deep-orange';
        break;
      case 'Ground':
        color = 'brown lighten-2';
        break;
      case 'Rock':
        color = 'brown darken-1';
        break;
      case 'Steel':
        color = 'grey darken-1';
        break;
      case 'Ice':
        color = 'light-blue lighten-3';
        break;
      case 'Ghost':
        color = 'indigo darken-1';
        break;
      case 'Dragon':
        color = 'deep-purple darken-4';
        break;
      case 'Dark':
        color = 'brown darken-3';
        break;
      case 'Shadow':
        color = 'grey darken-4';
        break;
      case 'Unknown':
        color = 'grey darken-4';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }
}