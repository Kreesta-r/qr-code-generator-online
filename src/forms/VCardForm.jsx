import React, { useState, useEffect } from 'react';
import './vcardform.css'

const VCardForm = ({ onChange }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    onChange({
      firstname,
      lastname,
      organisation,
      phoneNumber,
      email
    });
  }, [firstname, lastname, organisation, phoneNumber, email, onChange]);

  return (
    <div className="form-container">
      <label className='not-res'>Your Name:</label>
      <div className="names">
      <label className='label-res'>First Name:</label>
        <input
          type="text"
          value={firstname}
          placeholder='First Name'
          onChange={(e) => setFirstname(e.target.value)}
          className="input"
        />
        <label className='label-res'>Last Name:</label>
        <input
          type="text"
          value={lastname}
          placeholder='Last Name'
          onChange={(e) => setLastname(e.target.value)}
          className="input"
        />
      </div>
      <label>Company:</label>
      <input
        type="text"
        value={organisation}
        placeholder='Company'
        onChange={(e) => setOrganisation(e.target.value)}
        className="input"
      />
      <label>Phone Number:</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="input"
        placeholder='Phone'
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        placeholder='e.g johndoe@gmail.com'
      />
    </div>
  );
};

export default VCardForm;
