import Burger from "./Models/Burger.js";

let _state = {
  /** @type {Burger[]} */
  burgers: []
};


//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("cheeseburgerstand"));
  if (data) {
    // NOTE when data comes out of local storage all the data is POJOS
    // this step converts the objects back to "Burger" type objects
    data.burgers = data.burgers.map(pojoBurger => new Burger(pojoBurger))
    _state = data;
  }
}
_loadState();


class Store {
  /**
   * Provides access to application state data
   */

  constructor(data) {
    console.log("constructor store.js")
  }
  get State() {
    return _state;
  }
  saveState() {
    localStorage.setItem("cheeseburgerstand", JSON.stringify(_state))

  }
}

const STORE = new Store();
export default STORE;
