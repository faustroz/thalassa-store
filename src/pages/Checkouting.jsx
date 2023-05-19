import { ShopContext } from "../context/shop-context"
import { useContext } from "react"
import './Checkouting.css'
import { PRODUCTS } from "../products"
import { CartItem } from "./cart/cart-item-2"

const convertRupiah = require('rupiah-format')

const Checkouting = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext) /** cartItems untuk mendapatkan data item apa saja yang ada di keranjang */
  const totalAmount = convertRupiah.convert(getTotalCartAmount()) /** totalAmount adalah hasil harga yang sudah di convert ke rupiah */

  
  return (
    <div className="Checkouting">
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
                <p>INGAT SCREENSHOT PESANAN SEBELUM CHECKOUT!</p>
            </div>
      <h1>{getTotalCartAmount}</h1>
      <button>CHECKOUT</button>
    </div>
  )
}

export default Checkouting;