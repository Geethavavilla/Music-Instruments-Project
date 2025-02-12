import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Addproducts.css"

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [currentStock, setCurrentStock] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const numberPattern = /\d/;
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    const newPricePattern = /^\d{3,}$/;

    if (!productName.trim()) {
      newErrors.productName = 'Product name is required';
    } else if (numberPattern.test(productName)) {
      newErrors.productName = 'Product name should not contain numbers';
    }

    if (!productImage.trim()) {
      newErrors.productImage = 'Product image is required';
    } else if (!urlPattern.test(productImage)) {
      newErrors.productImage = 'Please enter a valid URL';
    }

    if (newPrice === '') {
      newErrors.newPrice = 'New price is required';
    } else if (!newPricePattern.test(newPrice)) {
      newErrors.newPrice = 'New price must be a number with at least 3 digits';
    } else if (parseFloat(newPrice) === 0) {
      newErrors.newPrice = 'New price cannot be zero';
    }

    if (oldPrice === '' || oldPrice < 0) {
      newErrors.oldPrice = 'Old price must be a non-negative number';
    }

    if (currentStock === '' || currentStock < 0) {
      newErrors.currentStock = 'Current stock must be a non-negative number';
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = {
      product_name: productName.trim(),
      image: productImage.trim(),
      New_price: parseFloat(newPrice),
      Old_price: parseFloat(oldPrice),
      current_stock: parseInt(currentStock, 10),
    };

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to add product: ${errorData.message}`);
      }

      await response.json();

      
      setProductName('');
      setProductImage('');
      setNewPrice('');
      setOldPrice('');
      setCurrentStock('');
      setErrors({});
      alert('Product added successfully!');
      navigate('/products'); 
    } catch (error) {
      console.error('Error adding product:', error);
      alert(`Error adding product: ${error.message}`);
    }
  };

  return (
    <center>
      <div className="add-products">
        <h1>Add New Product</h1>
        <center>
          <form onSubmit={handleSubmit}>
            <div className='submit-form'>
              <div className="input-group">
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className='product-name'
                  placeholder="Enter Product Name"
                  required
                />
                {errors.productName && <p className='error'>{errors.productName}</p>}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  value={productImage}
                  onChange={(e) => setProductImage(e.target.value)}
                  className='product-name'
                  placeholder="Enter Image URL"
                  required
                />
                {errors.productImage && <p className='error'>{errors.productImage}</p>}
              </div>
              <div className="input-group">
                <input
                  type="number"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className='product-name'
                  placeholder="Enter New Price"
                  required
                />
                {errors.newPrice && <p className='error'>{errors.newPrice}</p>}
              </div>
              <div className="input-group">
                <input
                  type="number"
                  value={oldPrice}
                  onChange={(e) => setOldPrice(e.target.value)}
                  className='product-name'
                  placeholder="Enter old Price"
                  required
                />
                {errors.oldPrice && <p className='error'>{errors.oldPrice}</p>}
              </div>
              <div className="input-group">
                <input
                  type="number"
                  value={currentStock}
                  onChange={(e) => setCurrentStock(e.target.value)}
                  className='product-name'
                  placeholder="Current Stock"
                  required
                />
                {errors.currentStock && <p className='error'>{errors.currentStock}</p>}
              </div>
              <button type="submit" className='add-product'>Add Product</button>
            </div>
          </form>
        </center>
      </div>
    </center>

  );
};

export default AddProducts;
