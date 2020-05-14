import { generateId } from "../utils.js"

export default class Burger {
    constructor(data) {
        console.log("constructor Burger.js")
        this.type = data.type
        this.id = data.id || generateId()
        /**@type {String[]} */
        this.toppings = data.toppings || []
        this.number = data.number
    }

    get Template() {
        return /*html*/`
        <div class="col-3">
        <div class="card shadow">
            <div class="card-body d-flex flex-column">
                <i class="fas fa-times text-danger align-self-end action" onclick="app.BurgersController.deleteBurger('${this.id}')"></i>
                <h4 class="card-title">Name: ${this.type}</h4>
                <h5 class="card-title">Patties: ${this.number}</h5>
                <ul class="pl-3">
                    ${this.ToppingsTemplate}
                </ul>
                <form onsubmit="app.BurgersController.addToppings(event, '${this.id}')">
                    <div class="form-group d-flex">
                        <input type="text" class="form-control" name="toppings" id="toppings"
                            aria-describedby="helpId" placeholder="Topping..." required>
                        <button type="submit" class="btn btn-outline-success ml-1">submit</button>
                    </div>
                </form>
                <button onclick= "app.cartcontroller.addItem (${this.id})" class="btn btn-outline-success">Add to Cart</button>
            </div>
            </div>
            </div>`

    }
    get ToppingsTemplate() {
        let template = ""
        this.toppings.forEach((toppings, index) => {
            template += /*html*/`
        <li>${toppings}
            <p 
                onclick="app.BurgersController.deleteToppings('${this.id}', ${index})"></p>
        </li>
        `
        })
        return template;
    }
}
