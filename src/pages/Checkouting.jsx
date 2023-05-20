import { ShopContext } from "../context/shop-context"
import { useContext } from "react"
import './Checkouting.css'
import { PRODUCTS } from "../products"
import { CartItemFinal } from "./cart/cart-item-2"

const convertRupiah = require('rupiah-format')

const Checkouting = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext) /** cartItems untuk mendapatkan data item apa saja yang ada di keranjang */
  const totalAmount = convertRupiah.convert(getTotalCartAmount()) /** totalAmount adalah hasil harga yang sudah di convert ke rupiah */

  PRODUCTS.map((product) => {
    if (cartItems[product.id] !== 0) {
      console.log(product)
    }
  })

  return (
    <div className="Checkouting">
        <div>
                <h1>Daftar Belanja</h1>
            </div>
            <div className="cartItemsFinalBanget">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItemFinal data={product}/>
                    }
                })}
                <p className="totalAmount">Total: {totalAmount}</p>
                <p className="disclaimer"><b>Screenshot halaman ini lalu tunjukkan ke admin!</b></p>
            </div>
      <h1>{getTotalCartAmount}</h1>
      <a href="https://wa.me/6287855130964/?text=Tunjukkan%20screenshot%20halaman%20yang%20tadi%20kamu%20isi%20yaa%20%F0%9F%A4%97%F0%9F%A5%B0%0AFix%20order%20%3D%20No%20hit%20and%20run!%20%0A%0AFormat%20order%F0%9F%98%8A%F0%9F%91%87%0A%0ANama%2FKelas%20%3A%20%0ANo%20Hp%2FWA%20%3A%20%0ALokasi%20%3A%20%0APesanan%20Alternatif%2FCadangan%09%3A%C2%A0(Opsional)">
        <button className="checkout">Checkout</button>
      </a>
    </div>
  )
}

export default Checkouting;