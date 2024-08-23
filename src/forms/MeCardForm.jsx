import React, { useState, useEffect } from 'react';

const MeCardForm = ({ onChange }) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    onChange({ firstname,lastname, phone, email });
  }, [firstname,lastname, phone, email, onChange]);

  return (
    <div className="form-container">
      <div className="name mecard-name">
        <input
          type="text"
          value={firstname}
          placeholder='Enter First Name'
          onChange={(e) => setFirstName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          value={lastname}
          placeholder='Enter Last Name'
          onChange={(e) => setLastName(e.target.value)}
          className="input"
        />
      </div>
      <input
        type="tel"
        value={phone}
        placeholder='Enter Phone Number'
        onChange={(e) => setPhone(e.target.value)}
        className="input"
      />
      <input
        type="email"
        value={email}
        placeholder='Enter Email Address'
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default MeCardForm;
