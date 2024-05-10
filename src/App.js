import './css/App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsByCategory from './pages/NewsByCategory';
import ArticaleDetails from './pages/ArticaleDetails';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/:uri' element={<ArticaleDetails />} />
        <Route path='/articales/:uri' element={<NewsByCategory />} />
        {/* <Route path='/slider' element={<Slider/>}/> */}
        <Route path='/search/:query' element={<Search />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
