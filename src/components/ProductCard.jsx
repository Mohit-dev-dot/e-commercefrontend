import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import QuickViewModal from './QuickViewModal';



export default function ProductCard({p}) {
  const { dispatch } = useContext(CartContext);
  const { dispatch: wdispatch, items } = useContext(WishlistContext);
  const inWishlist = items.find(i=>i.id===p.id);
  const [open, setOpen] = useState(false);

  return (
    <>
    <motion.div whileHover={{ y: -6 }} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className='card'>
      <div className='relative'>
        <Link to={'/product/'+p.id}><img src={p.img} className='h-40 object-cover rounded w-full'/></Link>
        <div className='absolute left-2 top-2 bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded text-xs'>{p.rating} ★</div>
      </div>
      <div className='mt-2'>
        <div className='font-medium'>{p.name}</div>
        <div className='text-sm text-gray-500'>{p.category}</div>
        <div className='mt-2 font-semibold'>₹{p.price}</div>
        <div className='mt-3 flex gap-2'>
          <button onClick={()=>{ dispatch({type:'add', item:p}); toast.success('Added to cart'); }} className='bg-indigo-600 text-white px-3 py-1 rounded'>Add</button>
          <button onClick={()=>{ wdispatch({type:'toggle', item:p}); toast(inWishlist? 'Removed from wishlist':'Added to wishlist'); }} className='px-3 py-1 border rounded'>{inWishlist? '♥':'♡'}</button>
          <button onClick={()=>setOpen(true)} className='ml-auto text-sm text-indigo-600'>Quick view</button>
        </div>
      </div>
    </motion.div>
    <QuickViewModal
  product={open ? p : null}
  onClose={() => setOpen(false)}
  onAdd={(item) => dispatch({ type: "add", item })}
/>

    </>
  );
}
