import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';
const ReadyToWear = () => {
  const products = useSelector((state) => state.products);
  const Women = products.filter((product) => product.productCategory ==="Women");
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {Women.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  )
}

export default ReadyToWear
