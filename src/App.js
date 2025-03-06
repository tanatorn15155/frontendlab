import React from 'react';
import ProductManagement from './ProductManagement';
import CustomerManagement from './CustomerManagement';
import FinancialManagement from './FinancialManagement';

function App() {
  return (
    <div className="app-container">
      <h1 className="header">Business System</h1>

      <div className="section">
        <h2>Product Management</h2>
        <ProductManagement /> {/* แสดงผล Product Management */}
      </div>

      <div className="section">
        <h2>Customer Management</h2>
        <CustomerManagement /> {/* แสดงผล Customer Management */}
      </div>

      <div className="section">
        <h2>Financial Management</h2>
        <FinancialManagement /> {/* แสดงผล Financial Management */}
      </div>
    </div>
  );
}

export default App;
