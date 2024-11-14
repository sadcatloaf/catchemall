import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js";
import { pokedexService } from "../services/PokedexService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokedexController {
    constructor() {
        console.log('🐦‍🔥🎮');
        this.fetchPokelist()
        AppState.on('pokemon', this.drawPokeList)
        AppState.on('activePokedex', this.drawActivePokedex)
    }

    async fetchPokelist() {
        try {
            await pokedexService.fetchPokelist()
        } catch (error) {
            console.error(error)
            Pop.toast('Pokemon escaped')
        }
    }

    async fetchActivePokedex(PokemonIndex) {
        try {
            console.log('🐕‍🦺📃', PokemonIndex);
            await pokedexService.fetchActivePokedex(PokemonIndex)
        } catch (error) {
            console.error(error)
            Pop.toast('Pokemon still escaped')
        }
    }


    drawPokeList() {
        console.log('🖌️🐦‍🔥📃');
        let pokeListHTML = ''
        AppState.pokemon.forEach(pokemon => pokeListHTML += pokemon.pokeListTemplate)
        setHTML('pokemon-list', pokeListHTML)
    }

    drawActivePokedex() {
        console.log('🖌️🐕‍🦺📃')
        setHTML('active-pokedex', AppState.activePokedex.ActivePokedexCard)
    }

}