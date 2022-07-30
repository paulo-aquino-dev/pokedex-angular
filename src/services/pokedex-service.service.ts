import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  }

  getAllPokemonData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }


}
