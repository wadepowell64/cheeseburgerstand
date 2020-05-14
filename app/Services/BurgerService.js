import Burger from "../Models/Burger.js";
import _store from "../store.js";

//Public



class BurgersService {

  constructor(data) {
    console.log("constructor BurgerService.js")
  }
  addToppings(toppings, id) {
    let burger = _store.State.burgers.find(b => b.id == id)
    burger.toppings.push(toppings)
    _store.saveState()
  }

  addBurger(rawBurger) {
    let burger = new Burger(rawBurger)
    _store.State.burgers.push(burger)
    _store.saveState()
  }

  deleteToppings(id, index) {
    let burger = _store.State.burgers.find(b => b.id == id)
    burger.toppings.splice(index, 1)
    _store.saveState()
  }

  deleteBurger(id) {
    _store.State.burgers = _store.State.burgers.filter(b => b.id != id)
    _store.saveState()
  }
}

const SERVICE = new BurgersService();
export default SERVICE;
