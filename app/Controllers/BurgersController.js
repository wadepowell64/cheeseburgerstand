import _burgersService from "../Services/BurgerService.js";
import _store from "../store.js"

function _draw() {
  let burgers = _store.State.burgers
  let template = ''
  burgers.forEach(b => template += b.Template)
  document.getElementById("cheeseburgers").innerHTML = template
}

//Public
export default class BurgersController {
  constructor() {
    console.log("constructor")
    _draw();
  }
  deleteBurger(id) {
    _burgersService.deleteBurger(id);
    _draw();
  }

  addBurger(e) {
    console.log("addBurger")
    e.preventDefault()
    let rawBurger = {
      type: e.target.type.value,
      number: e.target.number.value
    }
    _burgersService.addBurger(rawBurger)
    _draw()
  }

  addToppings(e, id) {
    e.preventDefault()
    let toppings = e.target.toppings.value
    _burgersService.addToppings(toppings, id)
    _draw()
  }

  deleteToppings(id, index) {
    _burgersService.deleteToppings(id, index)
    _draw()
  }
}
