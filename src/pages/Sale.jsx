import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';
const Sale = () => {
  const products = useSelector((state) => state.products);
  const saleProducts = products.filter((product) => product.isOnSale=== true);
  return (
    <div className='d-flex flex-wrap justify-content-evenly  m-4 '>
      {saleProducts.map((product) => (
        
        <ProductCard key={product.productId} product={product} />
        
      )) }
    </div>
  )
}

export default Sale
