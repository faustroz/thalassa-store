import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
const convertRupiah = require('rupiah-format')

export const CartItem = (props) => {
    const {id, productName, harga} = props.data
    let rupiahBaru = convertRupiah.convert(harga)
    const { cartItems, addToCart, removeCart, updateCartItemCount } = useContext(ShopContext)
    return (
        <div className="cartItem">
            <p><b>{productName}</b></p>
            <p><b>{rupiahBaru}</b></p>
            <div className="countHandler">
                <button onClick={() => removeCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    )
}