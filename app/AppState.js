import { Todo } from "./Models/Todo.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Image.js').Image} */
  // @ts-ignore
  image = null
  /** @type {import('./Models/Weather.js').Weather} */
  // @ts-ignore
  weather = null
  /** @type {import('./Models/Quote.js').Quote} */
  // @ts-ignore
  quote = null
  /** @type {import('./Models/Author.js').Author} */
  // @ts-ignore
  author = null
  /** @type {import('./Models/Todo.js').Todo[]} */
  // @ts-ignore
  todos = []


}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
