// CustomerManagement.js
import React, { useState } from 'react';

function CustomerManagement() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [customers, setCustomers] = useState([]);

  const handleAddCustomer = () => {
    const newCustomer = { name, phone, address };
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
      
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer.name} - {customer.phone} - {customer.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerManagement;
