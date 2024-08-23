import React, { useState, useEffect } from 'react';

const BitcoinForm = ({ onChange }) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('bitcoin');

  useEffect(() => {
    onChange({ address, amount, currency });
  }, [address, amount, currency, onChange]);

  return (
    <div className="form-container">
      <input
        type="text"
        value={address}
        placeholder='Enter Bitcoin address'
        onChange={(e) => setAddress(e.target.value)}
        className="input text-input"
      />
      <input
        type="number"
        value={amount}
        placeholder='Enter amount'
        onChange={(e) => setAmount(e.target.value)}
        className="input text-input"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="input select-input"
      >
        <option value="bitcoin">Bitcoin</option>
        <option value="bitcoin_cash">Bitcoin Cash</option>
        <option value="ethereum">Ethereum</option>
        <option value="litecoin">Litecoin</option>
        <option value="dash">Dash</option>
      </select>
    </div>
  );
};

export default BitcoinForm;
