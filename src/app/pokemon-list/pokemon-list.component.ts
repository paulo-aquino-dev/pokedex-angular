import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from '../../services/pokedex-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  alteraSprite: boolean = true;
  tipoPokemon: string = 'fire';
  constructor(private pokedexService: PokedexServiceService) {}

  ngOnInit(): void {
    this.pokedexService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.pokedexService
          .getAllPokemonData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
          });
      });
    });
  }

  alterarSprite(): void {
    if (this.alteraSprite == true) this.alteraSprite = false;
    else this.alteraSprite = true;
  }
}
