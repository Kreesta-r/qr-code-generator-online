import React, { useState, useEffect } from 'react';

const FacebookForm = ({ onChange }) => {
  const [profileUrl, setProfileUrl] = useState('');

  useEffect(() => {
    onChange({ profileUrl });
  }, [profileUrl, onChange]);

  return (
    <div className="form-container">
      <input
        type="url"
        value={profileUrl}
        placeholder='Enter Facebook profile URL'
        onChange={(e) => setProfileUrl(e.target.value)}
        className="input text-input"
      />
    </div>
  );
};

export default FacebookForm;
