import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore";
import { TableCss } from "../../components/styles/TableCss";
import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Productstable() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [style, setStyle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const storage = getStorage();
  const [id, setId] = useState('');
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    productName: '',
    price: '',
    category: '',
    productImage: '',
    style: ''
  });


  const handleAddProductClick = () => {
    setShowForm(true);
    setShow(false); // Reset show state
    setFormData({
      id: '',
      productName: '',
      price: '',
      category: '',
      productImage: '',
      style: ''
    });
  };


  //CRUD methods:-
  // Create database
  const productsCollection = collection(db, "products");

  //GET/ FETCH products
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(productsCollection);
      setProducts(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    getData();
  }, []);

  // Handle file change for image input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  //Create a new product
  const handleCreate = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `productImages/${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);

    await addDoc(productsCollection, {
      Name: productName,
      price: productPrice,
      style: style,
      category: category,
      image: imageUrl
    });

    // Fetch updated products
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    setProductName('');
    setProductPrice('');
    setStyle('');
    setCategory('');
    setImage(null);
    setShowForm(false);
  };

  //Edit the product
  const handleEdit = async (id, productName, productPrice, style, category) => {
    setProductName(productName);
    setProductPrice(productPrice);
    setStyle(style);
    setId(id);
    setCategory(category);
    //Hide the Add product form and return to UI
    setShowForm(true);
    setShow(true);
  }

  //Update the product
  const handleUpdate = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `productImages/${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);

    await updateDoc(doc(db, "products", id), {
      Name: productName,
      price: productPrice,
      style: style,
      category: category,
      image: imageUrl
    });

    const data = await getDocs(productsCollection);
    setProducts(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    setProductName('');
    setProductPrice('');
    setStyle('');
    setCategory('');
    setImage(null);

    //Hide the Edit form and return to UI
    setShowForm(false);
  };

  //Delete a product
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  // Filter products based on selected category
  const handleFilterChange = async (category) => {
    setSelectedCategory(category);
    const productsRef = collection(db, "products");
    let filteredProducts = [];

    if (category === '') {
      const data = await getDocs(productsRef);
      filteredProducts = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } else {
      const querySnapshot = await getDocs(query(collection(db, "products"), where("category", "==", category)));
      filteredProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    setProducts(filteredProducts);
  };

  return (
    <div>
      {!showForm && (
        <>
          <button className='btn' onClick={handleAddProductClick} style={{ background: 'black', color: 'white' }}><b>Add Product</b></button>
          <select value={selectedCategory} style={{ marginLeft: '3rem', height: '36px', width: '200px', borderRadius: '6px' }} onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="">All</option>
            <option value="Women shoes">Women shoes</option>
            <option value="Men shoes">Men shoes</option>
            <option value="Kids shoes">Kids shoes</option>
            <option value="Women apparels">Women apparels</option>
            <option value="Men apparels">Men apparels</option>
            <option value="Kids apparels">Kids apparels</option>
          </select>
        </>
      )}
      <TableCss>
        <br></br>
        <div>
          {!showForm ? (
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Style</th>
                  <th>Product Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.Name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.style}</td>
                    <td><img src={product.image} alt="Product" style={{ width: '50px' }} /></td>
                    <td>
                      <button onClick={() => handleEdit(product.id, product.Name, product.price, product.category, product.style, product.image)} className="edit">Edit</button>
                      <button className="delete" onClick={() => handleDelete(product.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <form>
              <label>
                <p>Product Name:</p>
                <input onChange={(e) => setProductName(e.target.value)} type='text' name='productName' value={productName} />
                <br></br>
                <p>Product Price:</p>
                <input onChange={(e) => setProductPrice(e.target.value)} type='number' name='productPrice' value={productPrice} />
                <br></br>
                <p>Category:</p>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                  <option value="">Select</option>
                  <option value="Women shoes">Women shoes</option>
                  <option value="Men shoes">Men shoes</option>
                  <option value="Kids shoes">Kids shoes</option>
                  <option value="Women apparels">Women apparels</option>
                  <option value="Men apparels">Men apparels</option>
                  <option value="Kids apparels">Kids apparels</option>
                </select>
                <br></br>
                <p>Style:</p>
                <input onChange={(e) => setStyle(e.target.value)} type="text" name="style" value={style} />
                <br></br>
                <p>Product Image:</p>
                <input type="file" onChange={(e) => handleImageChange(e)} name="productImage" />
                <br />
                {!show ? <button onClick={handleCreate} style={{ background: 'blue', color: 'whitesmoke', width: '90px', fontFamily: 'sans-serif' }}>Create</button> :
                  <button onClick={handleUpdate} style={{ background: 'blue', color: 'whitesmoke', width: '90px', fontFamily: 'sans-serif' }}>Update</button>}
              </label>
            </form>
          )}
        </div>
      </TableCss>
    </div>
  )
}
