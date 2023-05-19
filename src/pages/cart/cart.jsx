import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { useContext } from "react"
import { CartItem } from "./cart-item"
import './cart.css'
import { useNavigate } from "react-router-dom"

const convertRupiah = require('rupiah-format')

const Cart = () => {
    const navigate = useNavigate()
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = convertRupiah.convert(getTotalCartAmount())

    return (
        <div className="cart">
            <div>
                <h1>Daftar Belanja</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}

                
                <p className="totalAmount">Total: {totalAmount}</p>
            </div>
            <div className="checkout">
                <button onClick={() => navigate('/checkout')}>Pesan Sekarang!</button>
            </div>
        </div>
        
    );
}

export default Cart;