import './product.css'
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
const convertRupiah = require('rupiah-format')

export const Product = (props) => {

    const {id, productName, harga, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)
    let rupiahBaru = convertRupiah.convert(harga)
    const cartItemAmount = cartItems[id]

    return (
    <div className='Productcard'>
      <img src={productImage} alt={productName} className='img-cont' />
      <div className="id-cont">
        <div className="texts-cont">
          <p className="prodname">{productName}</p>
          <p className="price">{rupiahBaru}</p> 
        </div>
        <p className='plusbutton' onClick={() => addToCart(id)}>+ {cartItemAmount > 0}</p>
      </div>
    </div>
    )
}