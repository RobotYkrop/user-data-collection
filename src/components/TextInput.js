import React from 'react';

const TextInput = ({ id, label, name, value, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default TextInput;