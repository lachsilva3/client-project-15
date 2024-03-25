import { TableCss } from "../../components/styles/TableCss";
import { PRODUCTS } from '../../db/products'; 
import { faFileZipper } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

export default function Productstable() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    productName: '',
    price: '',
    category: '', 
    productImage: '', 
    style: ''
  });
  const [editIndex, setEditIndex] = useState(null);


  const handleAddProductClick = () => {
    setShowForm(true);
    setFormData({
      id: '',
      productName: '', 
      price: '',
      category: '',
      productImage: '',
      style: ''
    });
    setEditIndex(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = formData;
      setProducts(updatedProducts);
    } else {
      setProducts([...products, formData]);
    }
    setShowForm(false);
  };

  const handleEditClick = (index) => {
    setShowForm(true);
    setFormData(products[index]);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          productImage: reader.result 
        });
      };
      reader.readAsDataURL(file);
    }
  };
// test
const [products, setProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('');
useEffect(() => {
  // Load products data
  setProducts(PRODUCTS);
   // Initially, show all products
}, []);
const handleFilterChange = (category) => {
  setSelectedCategory(category);
  if (category === '') {
    // Show all products if no category is selected
    setProducts(PRODUCTS);
  } else {
    // Filter products based on selected category
    const filtered = PRODUCTS.filter(product => product.category === category);
    setProducts(filtered);
  }
};




  return (
    <div>
      <button className='btn' onClick={handleAddProductClick} style={{ background: 'black', color: 'white' }}><b>Add Product</b></button>
 
      <select value={selectedCategory} onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">All</option>
        <option value="Women shoes">Women shoes</option>
        <option value="Men shoes">Men shoes</option>
        <option value="Kids shoes">Kids shoes</option>
        <option value="Women apparels">Women apparels	</option>
        <option value="Men apparels">Men apparels</option>
        <option value="Kids apparels">Kids apparels</option>
      </select>
     
      <TableCss>
        <br></br>
        <div>
          {!showForm ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th> 
                  <th>Price</th>
                  <th>Category</th>
                  <th>Style</th>
                  <th>Product Image</th> 
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.productName}</td> 
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.style}</td>
                    <td><img src={product.productImage} alt="Product" style={{ width: '50px' }} /></td> 
                    <td>
                      <button className="edit" onClick={() => handleEditClick(index)}>Edit</button>
                      <button className="delete" onClick={() => handleDeleteClick(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} /><br /><br />
              <label htmlFor="productName">Product Name:</label> 
              <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} /><br /><br /> 
              <label htmlFor="price">Price:</label>
              <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} /><br /><br />
              <label htmlFor="category">Category:</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange}>
                <option value="Women shoes">Women shoes</option>
                <option value="Men shoes">Men shoes</option>
                <option value="Kids shoes">Kids shoes</option>
                <option value="Women apparels">Women apparels</option>
                <option value="Men apparels">Men apparels</option>
                <option value="Kids apparels">Kids apparels</option>
              </select><br /><br />
              <label htmlFor="style">Style:</label>
              <input type="text" id="style" name="style" value={formData.style} onChange={handleChange} /><br /><br />
              <label htmlFor="productImage">Product Image:</label> 
              <input type="file" id="productImage" name="productImage" accept="image/*" onChange={handleImageUpload} /><br /><br />
{formData.productImage && <img src={formData.productImage} alt="Product" style={{ width: '50px' }} />} 
<br /><br />
<button type="submit" className="submit">Submit</button>
</form>
)}
</div>
</TableCss>
</div>
)
}