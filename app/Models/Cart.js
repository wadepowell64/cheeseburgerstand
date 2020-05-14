import { generateId } from "../utils.js"

export default class Item {
  constructor(data) {
    console.log("constructor Cart.js")
    this.id = data.id || generateId()
    this.cart = data.cart || []
    /**@type {String[]} */
  }

  get itemsTemplate() {
    let template = ""
    this.cart.forEach((cart, index) => {
      template += /*html*/`
        <li>${cart}
            <i class="fas fa-times text-danger action"
                onclick="app.cartcontroller.deleteItem('${this.id}', ${index})"></i>
        </li>
        `
    })
    return template;
  }
}