import './Category.css';
import Cart from '../pages/cart/cart';
import { useState } from 'react';

const Category = () => {
  const [cartButton, setCartButton] = useState(false);

  return(
    <div className='category-outter'>
      <div className='category-container'>
        <div className="category-wrapper">
          <div className="category">Sweet</div>
          <div className="category">Favourites</div>
          <div className="category">Best Choice</div>
          <div className="category">Side Dish</div>
          <div className="category">Beverages</div>
        </div>
        <Cart trigger={cartButton} setTrigger={setCartButton} />
        <div className="category" onClick={setCartButton}>Cart</div>
      </div>
    </div>
  );
    
}

export default Category;