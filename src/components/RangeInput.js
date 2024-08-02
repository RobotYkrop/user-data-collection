import React from 'react';

const RangeInput = ({ id, label, min, max, step, value, onChange }) => (
  <div className="mb-3">
        <label htmlFor="id" className="form-label">{label}</label>
        <input
          type="range"
          className="form-range"
          id={id}
          name={id}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          required
        />
      </div>
);

export default RangeInput;