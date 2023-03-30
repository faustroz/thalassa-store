import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { useContext } from "react"
import { CartItem } from "./cart-item"
import './cart.css'

const convertRupiah = require('rupiah-format')

const Cart = (props) => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = convertRupiah.convert(getTotalCartAmount())

    return (props.trigger) ? (
        <div className="cart">
            <div>
                <h1>Shop List</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}
                <p>Total: {totalAmount}</p>
                <input className="user-data" type="text" placeholder='NIS'/>
                <input className="user-data" type="text" placeholder='2 Words of your name'/>
            </div>
            
            <div className="checkout">
                <button onClick={() => props.setTrigger(false)}>Back Shopping</button>
                { props.children }
                <button>Checkout</button> { /* add routing */ }
            </div>
        </div>
    ) : "";
}

export default Cart;