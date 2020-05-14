import _CartService from "../Services/CartService.js"
import STORE from "../store";

function _draw() {
  let cart = STORE.State.cart
  let template = ''
  cart.forEach(c => template += c.Template)
  document.getElementById("cart").innerHTML = template
}

export default class cartcontroller {
  constructor() {
    _draw();
  }

  addItem(id) {
    _CartService.addItem(id);
    _draw();
  }

  deleteItem(id, index) {
    _CartService.deleteItem(id, index)
    _draw()
  }
}