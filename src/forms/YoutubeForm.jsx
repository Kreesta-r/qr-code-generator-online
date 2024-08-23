import React, { useState, useEffect } from 'react';

const YoutubeForm = ({ onChange }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    onChange({ url });
  }, [url, onChange]);

  return (
    <div className="form-container">
      <input
        type="url"
        value={url}
        placeholder='Enter YouTube URL'
        onChange={(e) => setUrl(e.target.value)}
        className="input text-input"
      />
    </div>
  );
};

export default YoutubeForm;
