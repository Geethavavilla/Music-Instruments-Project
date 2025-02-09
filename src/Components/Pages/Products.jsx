import React from 'react';
import Data from "../Data/Data.json"
import "./Products.css"

const Products = ({products}) => {
  return (
    <div>
      <h1>Products</h1>
     
      <div className="cards-header">
        {Data.map(product => (
          
              <div key={product.Code} className="card card-item">
                <img src={product.image} className="products-img" alt="image"></img>
                <h3>{product.product_name}</h3>
                <p className="price-tag"><span className="line-strike">${product.New_price}</span>&bsp;&nbsp;${product.Old_price}</p>
                <button className="buy-now">Buy Now</button>
              </div>
         
        ))}
         </div>
     
    </div>
  );
};

export default Products;
