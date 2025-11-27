import bag from "../assets/backpack.jpg";
import shoes from "../assets/sneakers.jpg";     // shoes = sneakers
import tshirt from "../assets/tshirt.jpg";
import headphones from "../assets/headphones.jpg";


export const products = [
  {
    id: 1,
    name: "Minimalist Backpack",
    category: "Bags",
    price: 500,
    rating: 4.5,
    img: bag,
  },
  {
    id: 2,
    name: "Classic White Sneakers",
    category: "Shoes",
    price: 600,
    rating: 4.7,
    img: shoes,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 190,
    rating: 4.3,
    img: tshirt,
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 800,
    rating: 4.6,
    img: headphones,
    description: "Noise-cancelling over-ear headphones with 20h battery.",
    stock: 8,
    sku: "HPH-001"
  }
];
