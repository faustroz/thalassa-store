import './Homepage.css';
import { useRef } from 'react';
import Shop from './shop/shop';
import Cart  from './cart/cart.jsx';
import logo from '../img/logo.png'


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
      <div className="container">
        <header>
          <nav>
            <img src={logo} alt="logo" className='logo' />
          </nav>
          <h1>Selamat datang di<br/>Kedai Bali Djadoel. Kami atasi laparmu</h1>
          <div className="btn-scrl" onClick={() => goto(linkRef.current)}>
            <p>Mulai belanja ↓</p>
          </div>
        </header>
        <hr />
        <section ref={linkRef}>
          <h1>Menu </h1>
          <Shop/>
          <Cart />
        </section>
      </div>
    </div>
  )
}

export default Homepage;