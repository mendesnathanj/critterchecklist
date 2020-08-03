import React from 'react';

const FormInput = ({ label, type, value, setter }) =>
  <div>
    <label>
      { label }
      <input
        type={type}
        value={value}
        onChange={(e) => setter(e.target.value)}
      />
    </label>
  </div>

export default FormInput;
