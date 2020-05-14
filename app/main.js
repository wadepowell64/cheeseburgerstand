import BurgersController from "./Controllers/BurgersController.js";
import cartcontroller from "./Controllers/cartcontroller.js"

class App {

  constructor(data) {
    console.log("constructor main.js")
  }
  BurgersController = new BurgersController();

  cartcontroller = new cartcontroller()
}

window["app"] = new App();
