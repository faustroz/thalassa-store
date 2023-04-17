import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { useContext } from "react"
import { CartItem } from "./cart-item"
import './cart.css'

const convertRupiah = require('rupiah-format')
const Cart = () => {
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
               <button><a href="https://wa.me/+6287855130964?text=Halo%2C%20saya%20ingin%20memesan%20produk%20nomor%201">Pesan Sekarang!</a></button> { /* add routing */ }
            </div>
        </div>
        
    );
}

export default Cart;