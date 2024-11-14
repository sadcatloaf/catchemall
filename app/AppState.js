import { DetailedPokedex, Pokemon } from './models/Pokedex.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /** @type {Pokemon[]} */
  pokemon = []

  /** @type {DetailedPokedex} */
  activePokedex = null


  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())