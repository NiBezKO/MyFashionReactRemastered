import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './scss/style.scss';
import Main from './Pages/Main';
import Header from './UI/Header';
import Footer from './UI/Footer';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import FullItem from './Pages/FullItem';

export const AppContext = React.createContext();
console.log(AppContext);

function App() {
  return (
    <AppContext.Provider value={{}}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<FullItem />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
