import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { useContext } from "react"
import { CartItem } from "./cart-item"
import './cart.css'
import { useNavigate } from "react-router-dom"
const convertRupiah = require('rupiah-format')

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = convertRupiah.convert(getTotalCartAmount())
    const navigate = useNavigate()
    return (
        <div className="cart">
            <div>
                <h1> Data Keranjang </h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            <div className="checkout">
                <p>Total: {totalAmount}</p>
                <button onClick={() => navigate('/')}> Lanjutkan Belanja</button>
                <button> Order Sekarang </button>
            </div>
        </div>
    )
}