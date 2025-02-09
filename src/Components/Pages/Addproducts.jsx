// import React, { useState } from 'react';
import './Addproducts.css';


 const Addproducts = () => {
 

  return (
    <center>
    <div className="add-products">
      <h1> Add New Product</h1>
      <center>
      <form >
      <div className='submit-form'>
      <input
        type="text"
        // value={productName}
        className='product-name'
        // onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter product name"
      />
      <input
        type="text"
        // value={productName}
        className='product-name'
        // onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter Price"
      />
      <input
        type="text"
        // value={productName}
        className='product-name'
        // onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter New Price"
      />
      <input
        type="text"
        // value={productName}
        className='product-name'
        // onChange={(e) => setProductName(e.target.value)}
        placeholder="Enter Old Price"
      />
      <input
        type="text"
        // value={productImage}
        className='product-name'
        // onChange={(e) => setProductImage(e.target.value)}
        placeholder="Enter image URL"
      />
      <button  className='add-product'>
        Add Products
      </button>
      </div>
      </form>
      </center>
    </div>
    </center>
  );
};

export default Addproducts;
