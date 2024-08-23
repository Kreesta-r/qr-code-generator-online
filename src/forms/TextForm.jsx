
import React, { useState, useEffect } from 'react';


const TextForm = ({ onChange }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    onChange({ text });
  }, [text, onChange]);

  return (
    <div className="form-container">
      <input
        type="text"
        value={text}
        placeholder='Enter your Text '
        onChange={(e) => setText(e.target.value)}
        className="input text-input"
      />
    </div>
  );
};

export default TextForm;
