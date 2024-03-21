import React, { useState } from 'react';
import { Outlet,NavLink } from 'react-router-dom'
import { LoginFormCss } from '../../components/styles/LoginFormCss';

export default function Addproducts() {
  return (
    <div>
      <h5 style={{textAlign:'center',margin:'0px',fontSize:'23.4px'}}><b>Add Products</b></h5>
<LoginFormCss>
<div className="login-container">


<form className="login-form">
<div className="form-group">

    <label>Product Name:</label>
    <input
      type="text"
      className="form-control"
    />
  </div>

  <div className="form-group">
    <label>Style:</label>
    <input
      type="text"
      className="form-control"
    />
  </div>

  <div className="form-group">
    <label>Price:</label>
    <input
      type="text"
      className="form-control"
    />
  </div>

  <div className="form-group">
  <label >Category:</label><br></br>
  <select name="category" id="category">
    <option value="Women shoes">Women shoes</option>
    <option value="Men shoes">Men shoes</option>
    <option value="Kids shoes">Kids shoes</option>
    <option value="Women apparels">Women apparels</option>
    <option value="Men apparels">Men apparels</option>
    <option value="Kids apparels">Kids apparels</option>
  </select>
  </div>

  <div className="form-group">
<label for="img">Product Image:</label><br></br>
  <input style={{width:'100%',
  backgroundColor:'white',padding:'10px',borderRadius:'5px',
border:'1px solid #ccc'}} 
  type="file" id="img" name="img" accept="image/*" />
  </div>

  <button type="button"  className="btn btn-primary">
    <b>Add Product</b>
  </button>
  <br></br>
</form>

</div>
</LoginFormCss>

    </div>
  )
}
