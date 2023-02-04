import React, { useState } from "react";

const BillTracker = () => {
  const [bills, setBills] = useState([]);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBills([...bills, { item, price: parseFloat(price) }]);
    setItem("");
    setPrice(0);
  };

  const total = bills.reduce((acc, bill) => acc + bill.price, 0);
  const split = total / 2;

  return (
    <div>
      <h1>Bill Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr key={index}>
              <td>{bill.item}</td>
              <td>{bill.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: {total}</h2>
      <h2>Split: {split}</h2>
    </div>
  );
};

export default BillTracker;
