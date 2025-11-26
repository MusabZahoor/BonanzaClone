import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';
const Kids = () => {
  const products = useSelector((state) => state.products);
  const Kids = products.filter((product) => product.productCategory ==="Kids");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {Kids.map((product) => (
        <ProductCard key={product.productId} product={product} />
      )) }
    </div>
  )
}

export default Kids
