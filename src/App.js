import { ShopContextProvider } from './context/shop-context';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './pages/cart/cart';

const App = () => {
  return (
    <div>
      <ShopContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/order' element={<Homepage />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
