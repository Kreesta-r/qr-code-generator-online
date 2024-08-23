// src/forms/EmailForm.js
import React, { useState, useEffect } from 'react';
// import './Forms.css'

const EmailForm = ({ onChange }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    onChange({ email, subject, message });
  }, [email, subject, message, onChange]);

  return (
    <div className="form-container">
      <label>Email Address:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <label>Subject:</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="input"
      />
      <label>Message:</label>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default EmailForm;
