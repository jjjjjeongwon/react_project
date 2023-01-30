import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import ProductList from './components/layout/ProductList';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="appWrap">
        <Header />
        <Routes>
          <Route path='/' element={<ProductList  />} />
          <Route path='/detail' element={<ProductDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
