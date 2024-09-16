import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, BarChart2, Map } from 'lucide-react';
import Layout from '../components/Layout';

// Mock data for demonstration
const appleVarieties = [
  { id: 1, name: "Kullu Fresh", origin:'Kullu', variety: 'Honeycrisp', price: 2.5, stock: 5000, quality: 95, source :"/a4.jpeg" },
  { id: 2, name: "Shimla Royal Orchards", origin:'Manali', variety:'Gala', price: 1.8, stock: 8000, quality: 92, source :"/a2.jpeg" },
  { id: 3, name: "Pahadi Farms", origin:'Shimla',  variety:'Fuji', price: 2.2, stock: 6000, quality: 94, source :"/a3.jpeg" },
  { id: 4, name: "Rawat Apple Company", origin:'Dehradun', variety:'Granny Smith', price: 1.9, stock: 7000, quality: 91, source :"/a5.jpeg" },
  { id: 5, name: "Hills Fresh",  origin:'Kullu',variety:'Honeycrisp', price: 2.5, stock: 5000, quality: 95, source :"/a6.jpeg" },
  { id: 6, name: "Apple Paradise", origin:'Kullu', variety:'Gala', price: 1.8, stock: 8000, quality: 92, source :"/a7.jpeg" },
  { id: 7, name: "GOAT Apples", origin:'Shimla', variety:'Fuji', price: 2.2, stock: 6000, quality: 94, source :"/a1.jpeg" },
  { id: 8, name: "Skibidi apples", origin:'Shimla', variety:'Granny Smith', price: 1.9, stock: 7000, quality: 91, source :"/a9.jpeg" },
];

const AppleCard = ({ apple, addToCart }) => (
  <div className="relative bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-lg overflow-hidden">
    {/* Hover Overlay */}
    <div className="absolute inset-0 h-[295px] py-20 bg-gray-800 bg-opacity-75 text-white flex flex-col pb-20 justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
      <p className="text-lg font-semibold mb-2">Origin: {apple.origin}</p>
      <p className="text-md">Orchard: {apple.name}</p>
    </div>

    {/* Card Content */}
    <img 
      src={apple.source}  // Use the unique image source here
      alt={apple.name} 
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold mb-2">{apple.name}</h3>
    <div className="flex justify-between items-center mb-2">
      <span className="text-green-600 font-bold">₹{apple.price.toFixed(2)}/kg</span>
      <span className="text-gray-600">Stock: {apple.stock} kgs</span>
    </div>
    <div className="flex items-center mb-4">
      <BarChart2 className="text-blue-500 mr-2" />
      <span className="text-sm">Quality Score: {apple.quality}%</span>
    </div>
    <button 
      onClick={() => addToCart(apple)} 
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
    >
      Add to Cart
    </button>
  </div>
);


const Cart = ({ items, removeFromCart }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-xl font-bold mb-4">Cart</h2>
    {items.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} - ₹{item.price.toFixed(2)}/kg x {item.quantity}lb</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <strong>Total: ₹{items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</strong>
        </div>
        <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
          Checkout
        </button>
      </>
    )}
  </div>
);

const Marketplace = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [qualityFilter, setQualityFilter] = useState(0);

  const addToCart = (apple) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === apple.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === apple.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...apple, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const filteredApples = appleVarieties.filter(
    (apple) =>
      apple.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      apple.quality >= qualityFilter
  );

  return (
    <div>
        <Layout>
    <div className="container mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-8  text-white text-center">Orchard Marketplace</h1>
      <div className="flex mb-8">
        <div className="w-3/4 pr-4">
          <div className="flex mb-4">
            <div className="relative flex-grow mr-4">
              <input
                type="text"
                placeholder="Search apples..."
                className="w-[500px] p-2 border border-black rounded-md pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-900" />
            </div>
            <div className="relative">
              <select
                className="p-2 border border-black rounded-md appearance-none pr-10"
                value={qualityFilter}
                onChange={(e) => setQualityFilter(Number(e.target.value))}
              >
                <option value={0}>All Quality</option>
                <option value={90}>90% and above</option>
                <option value={95}>95% and above</option>
              </select>
              <Filter className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredApples.map((apple) => (
              <AppleCard key={apple.id} apple={apple} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <Cart items={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Orchard Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold mb-2">Quality Trends</h3>
            <BarChart2 className="text-blue-500 w-full h-32" />
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold mb-2">Orchard Map</h3>
            <Map className="text-green-500 w-full h-32" />
          </div>
        </div>
      </div>
    </div>
    </Layout>
    </div>
  );
};

export default Marketplace;