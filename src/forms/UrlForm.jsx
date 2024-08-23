import React, { useState, useEffect } from 'react';
import '../Form.css'

const UrlForm = ({ onChange }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    onChange({ url });
  }, [url, onChange]);

  return (
    <div className="form-container">
      <input
        type="text"
        value={url}
        placeholder='Enter your URL'
        onChange={(e) => setUrl(e.target.value)}
        className="input text-input" 
      />
    </div>
  );
};

export default UrlForm;
