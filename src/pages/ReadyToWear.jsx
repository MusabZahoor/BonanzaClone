import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Card/ProductCard.jsx';

const ReadyToWear = () => {
  const products = useSelector((state) => state.products);
  
  // Debug: Log the products to check what's in the store
  console.log('All products:', products);
  
  const womenProducts = products.filter((product) => 
    product.productCategory === 'Women' || product.productCategory === 'women'
  );

  // Debug: Log the filtered products
  console.log('Filtered women products:', womenProducts);

  if (womenProducts.length === 0) {
    return (
      <div className='text-center m-5'>
        <h3>No products found in the Women's category</h3>
        <p>Check the console for debugging information</p>
      </div>
    );
  }

  return (
    <div className='d-flex flex-wrap justify-content-evenly m-4'>
      {womenProducts.map((product) => {
        // Fix image path if it starts with ./
        const fixedProduct = {
          ...product,
          productImg: product.productImg.startsWith('./') 
            ? product.productImg.substring(1) 
            : product.productImg
        };
        return <ProductCard key={product.productId} product={fixedProduct} />;
      })}
    </div>
  );
};

export default ReadyToWear;
