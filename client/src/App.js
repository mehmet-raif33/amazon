import {Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Ayarlar from './components/Ayarlar';
import Sepet from './components/Sepet';
import Iletisim from './components/Iletisim';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/ayarlar' element={<Ayarlar />} />
        <Route path='/iletisim' element={<Iletisim />} />
        <Route path='/sepet' element={<Sepet />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
