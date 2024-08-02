import React, { useState } from 'react';

const PhoneInput = ({ id, label, name, value, onChange, required }) => {
  const [inputValue, setInputValue] = useState(value);

  // Можно было бы использовать react-input-mask, но не совсем понятно можно ли использовать сторонние библиотеки
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    // Применяем маску
    if (cleaned.length <= 4) {
      return cleaned;
    }
    if (cleaned.length <= 7) {
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    }
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 10)}`;
  };

  const handleChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatPhoneNumber(rawValue);
    setInputValue(formattedValue);
    onChange({
      target: { name, value: rawValue }
    });
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type="tel"
        className="form-control"
        value={inputValue}
        placeholder='0XXX XXX XXX'
        onChange={handleChange}
        required={required}
        max={10}
      />
    </div>
  );
};

export default PhoneInput;