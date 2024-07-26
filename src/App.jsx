import React from 'react'
import Product from './components/Product/index.jsx'
import Navbar from './components/Navbar/index.jsx'


export default function App() {
  return (
    <div className="container mx-auto px-4">
      <Navbar/>
      <div className="flex flex-col md:flex-row mt-8">
        <Product/>
        
      </div>
    </div>
  )
}
