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
               <button><a href="https://wa.me/+6287855130964/?text=Bagi%20yang%20sudah%20fix%20untuk%20order%2C%20silahkan%20segera%20menulis%20formatnya%20yaa.%20%F0%9F%A4%97%F0%9F%A5%B0%0AFix%20order%20%3D%20No%20hit%20and%20run!%20%0A%0AFormat%20order%F0%9F%98%8A%F0%9F%91%87%0A%0ANama%2FKelas%20%3A%20%0ANo%20Hp%2FWA%20%3A%20%0ALokasi%20%3A%20%0AJenis%20orderan%20%26%20jumlahnya%20%3A%0APesanan%20Alternatif%2FCadangan%09%3A%C2%A0(Opsional)">Pesan Sekarang!</a></button> { /* add routing */ }
            </div>
        </div>
        
    );
}

export default Cart;