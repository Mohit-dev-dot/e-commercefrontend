import { Analytics } from "@vercel/analytics/react";
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Wishlist from './pages/Wishlist.jsx';
import CartPage from './pages/CartPage.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import Navbar from './components/Navbar.jsx';
import Toaster from './components/Toaster.jsx';
import { AnimatePresence, motion } from 'framer-motion';

function RoutesWrapper(){
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        key={location.pathname}
        initial={{opacity:0, y:8}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-8}}
        transition={{duration:0.25}}
      >
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App(){
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <div className='min-h-screen'>
            <Navbar/>
            <main className='pt-6'>
              <RoutesWrapper/>
            </main>

            {/* ✅ Add Analytics tracking here */}
            <Analytics />

            <Toaster/>
          </div>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}
