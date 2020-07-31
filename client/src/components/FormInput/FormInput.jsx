import React from 'react';

export default function FormInput({ label, type, value, setter }) {
  return (
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
  );
}
