import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigasi = useNavigate()
  return (
      <div className='navbar'>
        <ul>
          <li><a onClick={() => navigasi('/order')}>Order</a></li>
          <li><a onClick={() => navigasi('/tutorials')}>Tutorials</a></li>
          <li><a onClick={() => navigasi('/terms')}>Terms</a></li>
          <li><a onClick={() => navigasi('/about')}>About Us</a></li>
        </ul>
      </div>
  )
}

export default Navbar;