import './cart.css';
import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
const convertRupiah = require('rupiah-format')

export const CartItemFinal = (props) => {
    const {id, productName, harga} = props.data
    let rupiahBaru = convertRupiah.convert(harga)
    const { cartItems } = useContext(ShopContext)
    
    return (
        <div className="cartItemFinal">
            <div className=''>
                <p className='product-name'>{productName}</p>
                <p><b>{rupiahBaru}</b></p>
            </div>
            <div className="countHandlerFinal">
                <p>{cartItems[id]}x</p>
            </div>
        </div>
    )
}