import Item from "../Models/Cart.js";
import _store from "../store.js";

class CartService {
  deleteItem(id, index) {
    let item = _store.State.items.find(i => i.id == id)
    item.cart.splice(index, 1)
    _store.saveState()
  }

  addItem(id) {
    let item = new Item(id)
    _store.State.cart.push(item)
    _store.saveState()
  }
}

const SERVICE = new CartService();
export default SERVICE;