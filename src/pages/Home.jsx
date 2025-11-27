import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import FiltersBar from '../components/FiltersBar';
import SearchSuggestions from '../components/SearchSuggestions';
import FloatingCart from '../components/FloatingCart';

export default function Home(){
  const [query,setQuery]=useState('');
  const [category,setCategory]=useState('All');
  const [sort,setSort]=useState('');
  const [priceRange,setPriceRange]=useState([0,2000]);
  const [rating,setRating]=useState(0);
  const [loading,setLoading]=useState(false);

  // FIXED: use products instead of PRODUCTS
const list = useMemo(() =>
  products.filter(p =>
    (category === 'All' || p.category === category) &&
    p.name.toLowerCase().includes(query.toLowerCase()) &&
    p.price >= priceRange[0] &&
    p.price <= priceRange[1] &&
    p.rating >= rating
  ),
[query, category, priceRange, rating]);


  const sorted = useMemo(()=>{
    const copy=[...list];
    if(sort==='price_asc') copy.sort((a,b)=>a.price-b.price);
    if(sort==='price_desc') copy.sort((a,b)=>b.price-a.price);
    if(sort==='rating_desc') copy.sort((a,b)=>b.rating-a.rating);
    if(sort==='name_asc') copy.sort((a,b)=>a.name.localeCompare(b.name));
    return copy;
  }, [list,sort]);

  return (
    <div className='max-w-6xl mx-auto px-4'>
      <div className='relative mb-4'>
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder='Search products...' className='border p-2 rounded w-full' />
        
        {/* FIXED: use products instead of PRODUCTS */}
        <SearchSuggestions query={query} data={products} onSelect={(p)=> setQuery(p.name)} />
      </div>

      <div className='flex items-center gap-4 mb-4'>
        <select value={category} onChange={e=>setCategory(e.target.value)} className='border p-2 rounded'>
          <option>All</option><option>Clothing</option><option>Shoes</option><option>Bags</option><option>Electronics</option>
        </select>
        <FiltersBar 
          sort={sort} setSort={setSort} 
          minPrice={priceRange[0]} maxPrice={priceRange[1]} 
          setPriceRange={setPriceRange} 
          rating={rating} setRating={setRating}
        />
      </div>

      <ProductGrid list={sorted} />
      <FloatingCart />
    </div>
  );
}
