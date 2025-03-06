// ProductManagement.js
import React, { useState, useEffect } from 'react';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    // ดึงข้อมูลสินค้าเมื่อโหลดเพจ
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // ฟังก์ชันการเพิ่มสินค้า
  const handleAddProduct = async () => {
    const productData = { name, description, price, stock };
    await fetch('http://localhost:5000/api/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    setProducts([...products, productData]);  // เพิ่มสินค้าใหม่เข้าไปใน state
  };

  // ฟังก์ชันการลบสินค้า
  const handleDeleteProduct = async (id) => {
    await fetch(`http://localhost:5000/api/products/delete/${id}`, {
      method: 'DELETE',
    });
    // ลบสินค้าเฉพาะที่ตรงกับ id
    setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          onChange={(e) => setStock(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - {product.price} - {product.stock}
            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductManagement;
