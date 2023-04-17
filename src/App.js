import { ShopContextProvider } from './context/shop-context';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ShopContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Homepage />}/>
            </Routes>
          </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
