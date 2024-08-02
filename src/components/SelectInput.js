import React from 'react';

const SelectInput = ({ id, label, name, value, options, onChange, required }) => {
  const isOptionObject = (option) => typeof option === 'object' && option !== null && option.hasOwnProperty('name');

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Выберите...</option>
        {options.map((option, index) => {
          const optionLabel = isOptionObject(option) ? option.name : option;
          return (
            <option key={index} value={optionLabel}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;