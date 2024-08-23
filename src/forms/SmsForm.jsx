// src/forms/SmsForm.js
import React, { useState, useEffect } from 'react';

const SmsForm = ({ onChange }) => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    onChange({ number, message });
  }, [number, message, onChange]);

  return (
    <div className="form-container">
      <label>Phone Number:</label>
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="input"
      />
      <label>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default SmsForm;
