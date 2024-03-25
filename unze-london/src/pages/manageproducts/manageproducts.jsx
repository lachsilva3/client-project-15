import React, { useState } from 'react';
import { TableCss } from "../../components/styles/TableCss";
import { PRODUCTS } from '../../db/products'; 

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
  const [products, setProducts] = useState(PRODUCTS);

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

  return (
    <div>
      <button className='btn' onClick={handleAddProductClick} style={{ background: 'black', color: 'white' }}><b>Add Product</b></button>
      <br /><br />
      <TableCss>
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
                {products.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.productName}</td> 
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.style}</td>
                    <td><img src={item.productImage} alt="Product" style={{ width: '50px' }} /></td> 
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