import React from 'react';
import ReactDOM from 'react-dom/client';
import { Shop } from './pages/shop';
import './index.css'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { Contacts } from './pages/contacts';
import { Cart } from './pages/cart';
import { Login } from './pages/login';
import { NotFound } from './pages/notFound';
import { Product } from './pages/product';
import { MainMenu } from './components/mainHeader';

import { Provider } from 'react-redux';
import { store } from './redux';
import { PrivateRoute } from './components/privateRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<MainMenu/>}>
          <Route path='/' element={<Shop/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='cart' element={<Cart/>}/>
          </Route>
          <Route path='product/:productId' element={<Product/>}/>
          <Route path='product' element={<Navigate to='/'/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  
);
