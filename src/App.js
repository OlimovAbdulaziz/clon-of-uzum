import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './router/home/Home';
import Wishlist from './router/wishlist/Wishlist';
import Login from './router/login/Login';
import Chart from './router/chart/Chart';
import SingleRoute from './router/singleRoute/SingleRoute';
import Scroll from './components/scroll/Scroll';
function App() {
  return (
    <div className="App">
      <Scroll />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/product/:id' element={<SingleRoute />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;