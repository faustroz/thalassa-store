import './Homepage.css';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Shop from './shop/shop';
import Category from '../components/Category';
import Cart  from './cart/cart.jsx';


const Homepage = () => {
  
  const linkRef = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='Homepage'>
      <Navbar />
      <div className="container">
        <header>
          <h1>Welcome to <br/> Thalassa Store. Starving? we got you.</h1>
          <div className="btn-scrl" onClick={() => goto(linkRef.current)}>
            <p>Start shopping ↓</p>
          </div>
        </header>
        <section ref={linkRef}>
          <Category />
          <h1>Main Course</h1>
          <Shop/>
        </section>
      </div>
    </div>
  )
}

export default Homepage;