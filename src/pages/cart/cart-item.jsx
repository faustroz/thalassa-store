import './cart.css';
import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
const convertRupiah = require('rupiah-format')

export const CartItem = (props) => {
    const {id, productName, harga} = props.data
    let rupiahBaru = convertRupiah.convert(harga)
    const { cartItems, addToCart, removeCart, updateCartItemCount } = useContext(ShopContext)
    
    return (
        <div className="cartItem">
            <div className=''>
                <p className='product-name'>{productName}</p>
                <p><b>{rupiahBaru}</b></p>
            </div>
            <div className="countHandler">
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} className='product-count'/>
                <button onClick={() => removeCart(id)} className='product-count'>-</button>
                <button onClick={() => addToCart(id)} className='product-count'>+</button>
            </div>
        </div>
    )
}