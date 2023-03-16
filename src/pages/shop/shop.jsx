import './shop.css'
import { PRODUCTS } from '../../products';
import { Product } from './product';

export const Shop = () => {
    return (
        <div className="products">
            {PRODUCTS.map((product) => 
            <Product data={product} />)}
        </div>
    )
}

export default Shop;