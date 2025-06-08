import { useState } from 'react'
import ProductList from "./components/ProductList.jsx";
import './App.css'


function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      price: 1099.99,
      description: 'Latest Apple smartphone with advanced features.',
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'iPhone 14 Pro Max Case',
      price: 49.99,
      description: 'Durable case for iPhone 14 Pro Max with a sleek design.',
      category: 'Accessories',
    },
    {
      id: 3,
      name: 'USB-C Charger',
      price: 29.99,
      description: 'Fast-charging USB-C cable for all devices.',
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'Apple AirPods Pro',
      price: 159.99,
      description: 'High-quality wireless headphones with noise cancellation.',
      category: 'Electronics',
    },
  ]);

  return (
    <div className="app-container">
      <h1>Apple Products</h1>
      <ProductList products={products} />
    </div>
  );
}


export default App
