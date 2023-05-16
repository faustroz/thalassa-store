import { ShopContextProvider } from './context/shop-context';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkouting from './pages/Checkouting'


const App = () => {
  return (
    <div>
      <ShopContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/checkout' element={<Checkouting />}/>
            </Routes>
          </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
