import './Category.css';
import Cart from '../pages/cart/cart';
import { useState } from 'react';

const Category = () => {
  const [cartButton, setCartButton] = useState(false);

  return(
    <div className='category-outter'>
      <div className='category-container'>
        <Cart trigger={cartButton} setTrigger={setCartButton} />
        <div className="category" onClick={setCartButton}>Cart</div>
      </div>
    </div>
  );
    
}

export default Category;