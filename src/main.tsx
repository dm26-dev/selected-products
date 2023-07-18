// import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './sass/index.scss'
import { ProductsProvider } from './context/ProductContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
