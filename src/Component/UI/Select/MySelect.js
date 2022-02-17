import React from "react";

function MySelect({ options, defaultValue, onChange }) {
  console.log('====================================');
  console.log(options);
  console.log('====================================');
  return (
    <select onChange={(e) => onChange(e.target.value)} className="form-control w-50">
      <option value="">
        {/* {defaultValue} */}
        Filter By
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.region}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
