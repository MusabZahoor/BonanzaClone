import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';
const NewArrivals = () => {
  const products = useSelector((state) => state.products);
  const newArrivals = products.filter((product) => product.isNewArrival===true);
  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4 '>
      {newArrivals.map((product) => (
        <ProductCard key={product.productId} product={product} />
      )) }
    </div>
  )
}

export default NewArrivals
