import React, { useEffect, useState } from 'react';
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();

        // Ensure the data is an array
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Unexpected response format:', data);
          setProducts([]); 
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div >
      <h1>Products List</h1>
      <div className="cards-header">
      
        {Array.isArray(products) && products.map((product) => {
          const { id, image, product_name, New_price, Old_price, current_stock } = product;
          return (
            <div key={id} className="card card-item" >
              <img src={image} alt={product_name} width="50" height="50" className="products-img" />
                <h3 className='product-name'>{product_name}</h3>
                <p className='current-stock'>{current_stock}</p>
                <p className="price-tag product-name" ><span className="line-strike"> ${New_price}</span>&nbsp;&nbsp;${Old_price}</p>
                <p className='para'>Musical instruments are devices that create sounds.</p>
                <button className="buy-now">Buy Now</button>
              
            </div>
          );
        })}
        </div>
      
    </div>
  );
};

export default Products;
