import BurgersController from "./Controllers/BurgersController.js";

class App {

  constructor(data) {
    console.log("constructor main.js")
  }
  BurgersController = new BurgersController();
}

window["app"] = new App();
