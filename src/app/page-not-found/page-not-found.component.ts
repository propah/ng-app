import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styles: [
  ]
})
export class PageNotFoundComponent {
  random_id: number = Math.floor(Math.random() * 905) + 1;
  random_url?: string;
  constructor() {
    if (this.random_id < 10) {
      this.random_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00" + this.random_id + ".png";
    }
    else if (this.random_id < 100) {
      this.random_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0" + this.random_id + ".png";
    } else {
      this.random_url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + this.random_id + ".png";
    }
  }
}
