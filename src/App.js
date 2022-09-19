import React from 'react';

import Header from './components/Header'
import CartPage from './components/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Header/>

    <Routes>
      <Route path='/' element={<Cards/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
