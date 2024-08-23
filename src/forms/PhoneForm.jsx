import React, { useState, useEffect } from 'react';

const PhoneForm = ({ onChange }) => {
  const [number, setNumber] = useState('');

  useEffect(() => {
    onChange({ number });
  }, [number, onChange]);

  return (
    <div className="form-container">
      <input
        type="tel"
        value={number}
        placeholder='Enter phone number'
        onChange={(e) => setNumber(e.target.value)}
        className="input text-input"
      />
    </div>
  );
};

export default PhoneForm;
