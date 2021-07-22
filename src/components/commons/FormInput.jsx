import React from 'react';
import './FormInput.css';

// eslint-disable-next-line react/prop-types
function FormInput({ label, name, type, value = {}, setValue }) {
  const handleChange = (event) => {
    setValue({
      ...value,
      [name]: event.target.value,
    });
  };

  return (
    <div className="formCo">
      <label htmlFor={name}>
        <input
          placeholder={label}
          className="input"
          type={type}
          name={name}
          id={name}
          value={value[name]}
          onChange={handleChange}
          required
        />
      </label>
    </div>
  );
}

export default FormInput;
