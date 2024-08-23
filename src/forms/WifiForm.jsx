// src/forms/WifiForm.js
import React, { useState, useEffect } from 'react';
import './wifiform.css'

const WifiForm = ({ onChange }) => {
  const [encryption, setEncryption] = useState('WPA/WPA2');
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    onChange({ encryption, ssid, password });
  }, [encryption, ssid, password, onChange]);

  return (
    <div className="form-container">
      <label>Encryption Type:</label>
      <select value={encryption} onChange={(e) => setEncryption(e.target.value)} className="input">
        <option value="WPA/WPA2">WPA/WPA2</option>
        <option value="WEP">WEP</option>
        <option value="None">None</option>
      </select>
      <label>Network Name (SSID):</label>
      <input
        type="text"
        value={ssid}
        onChange={(e) => setSsid(e.target.value)}
        className="input"
      />
      <label>Password:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default WifiForm;
