import { AppState } from "../AppState.js";
import { DetailedPokedex, Pokemon } from "../models/Pokedex.js";


// @ts-ignore
const pokedexApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})


class PokedexService {
    async fetchActivePokedex(PokemonIndex) {
        const response = await pokedexApi.get(`pokemon/${PokemonIndex}`)
        const selectedPokemon = new DetailedPokedex(response.data)
        AppState.activePokedex = selectedPokemon
    }

    async fetchPokelist() {
        const response = await pokedexApi.get('pokemon')
        console.log('🐦‍🔥📇', response.data);
        const pokemon = response.data.results.map(pokemonData => new Pokemon(pokemonData))
        console.log('🐦‍🔥📃', pokemon)
        AppState.pokemon = pokemon
    }


}

export const pokedexService = new PokedexService()