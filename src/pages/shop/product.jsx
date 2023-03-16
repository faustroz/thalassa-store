import './product.css'
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
const convertRupiah = require('rupiah-format')

export const Product = (props) => {

    const {id, productName, harga} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)
    let rupiahBaru = convertRupiah.convert(harga)
    const cartItemAmount = cartItems[id]

    return (
    <div className='Productcard'>
      <div className="img-cont">{}</div>
      <div className="id-cont">
        <div className="texts-cont">
          <p className="prodname">{productName}</p>
          <p className="price">{rupiahBaru}</p> 
        </div>
        <p className='plusbutton' onClick={() => addToCart(id)}>+ {cartItemAmount > 0 && <p> ({cartItemAmount}) </p>}</p>
      </div>
    </div>
    )
}