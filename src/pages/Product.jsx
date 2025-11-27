import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';   // ✅ FIXED
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import toast from 'react-hot-toast';
import ImageGallery from '../components/ImageGallery';

// Optional: import extra gallery images properly
// import img2 from '../assets/backpack.png';
// import img3 from '../assets/shoes.png';

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));  // ✅ FIXED: id must be Number

  const { dispatch } = useContext(CartContext);
  const { dispatch: wdispatch, items } = useContext(WishlistContext);

  if (!product) return <div className='max-w-4xl mx-auto p-4'>Product not found</div>;

  const inWishlist = items.find(i => i.id === product.id);

  // FIX: Only valid image paths
  const images = [product.img];

  return (
    <div className='max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='col-span-2 card'>
        <ImageGallery images={images} />
      </div>

      <div className='card'>
        <h2 className='text-xl font-semibold'>{product.name}</h2>
        <p className='text-sm text-gray-500'>{product.category} · {product.rating} ★</p>

        <p className='mt-3 font-bold text-2xl'>₹{product.price}</p>
        <p className='mt-3 text-sm text-gray-600'>
          {product.description || 'High quality product. Great for everyday use.'}
        </p>

        <div className='mt-4 flex gap-2'>
          <button
            onClick={() => {
              dispatch({ type: 'add', item: product });
              toast.success('Added to cart');
            }}
            className='bg-indigo-600 text-white px-4 py-2 rounded'
          >
            Add to cart
          </button>

          <button
            onClick={() => {
              wdispatch({ type: 'toggle', item: product });
              toast(inWishlist ? 'Removed from wishlist' : 'Added to wishlist');
            }}
            className='px-4 py-2 border rounded'
          >
            {inWishlist ? '♥ Remove' : '♡ Wishlist'}
          </button>
        </div>

        <Link to='/' className='text-sm text-indigo-600 block mt-4'>
          Back to products
        </Link>
      </div>
    </div>
  );
}
