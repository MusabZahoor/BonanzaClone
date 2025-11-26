import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';
const Fragrances = () => { 
  const products = useSelector((state) => state.products);
  const Fragrance = products.filter((product) => product.productCategory ==="Fragrance");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {Fragrance.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  )
}

export default Fragrances
