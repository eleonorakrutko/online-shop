import React from 'react';
import ReactDOM from 'react-dom/client';
import { Shop } from './pages/shop';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from './pages/product';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Shop/>
  
);
