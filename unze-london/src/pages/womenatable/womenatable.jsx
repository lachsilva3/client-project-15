import React, { useState } from 'react';
import { TableCss } from "../../components/styles/TableCss";

export default function Womenatable() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    sno: '',
    id: '',
    name: '',
    price: '',
    style: '',
    
  });
  const [tableData, setTableData] = useState([
    {
      sno: '1',
      id: 'L38796',
      name: 'ANONA',
      price: 'PKR 3999',
      style: 'Style A',
      
    }
  ]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddProductClick = () => {
    setShowForm(true);
    setFormData({
      sno: '',
      id: '',
      name: '',
      price: '',
      style: '',
      
    });
    setEditIndex(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
     
      const updatedTableData = [...tableData];
      updatedTableData[editIndex] = formData;
      setTableData(updatedTableData);
    } else {
      
      setTableData([...tableData, formData]);
    }
    setShowForm(false);
  };

  const handleEditClick = (index) => {
    setShowForm(true);
    setFormData(tableData[index]);
    setEditIndex(index);
  };

  const handleDeleteClick = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <h1>Table of women apparel</h1>
      <button onClick={handleAddProductClick} style={{background:'black', color:'white'}}>Add Product</button>
      <br /><br />
      <TableCss>
        <div>
          {!showForm ? (
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Style</th>
                  
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.sno}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.style}</td>
                    
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
              <label htmlFor="sno">S.No : </label>
              <input type="text" id="sno" name="sno" style={{marginLeft:'50px'}} value={formData.sno} onChange={handleChange} /><br /><br />
              <label htmlFor="id">ID :</label>
              <input type="text" id="id" name="id" style={{marginLeft:'68px'}} value={formData.id} onChange={handleChange} /><br /><br />
              <label htmlFor="name">Name :</label>
              <input type="text" id="name" name="name" style={{marginLeft:'40px'}} value={formData.name} onChange={handleChange} /><br /><br />
              <label htmlFor="price">Price :</label>
              <input type="text" id="price" name="price" style={{marginLeft:'50px'}} value={formData.price} onChange={handleChange} /><br /><br />
              <label htmlFor="style">Style :</label>
              <input type="text" id="style" name="style" style={{marginLeft:'50px'}} value={formData.style} onChange={handleChange} /><br /><br />
              <button type="submit" className="submit">Submit</button>
            </form>
          )}
        </div>
      </TableCss>
    </div>
  )
}
