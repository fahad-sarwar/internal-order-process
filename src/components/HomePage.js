import React from 'react';
import CustomerSummary from './CustomerSummary';

const HomePage = () => {
  return (
    <div>
      <h1>Internal Order Process</h1>

      <h2>Place Broadband Order</h2>
      <ol>
        <li>Click the "start order" order button to place a new order</li>
      </ol>
      <div>
        <CustomerSummary />
      </div>
    </div>
  );
};

export default HomePage;
