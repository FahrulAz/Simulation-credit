import React from "react";

const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  format = false,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      value={format ? formatNumber(value) : value} 
      onChange={(e) => {
        if (format) {
          const number = e.target.value.replace(/\D/g, "");
          onChange(number);
        } else {
          onChange(e.target.value);
        }
      }}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
);

const formatNumber = (value) => {
  return value ? parseInt(value).toLocaleString("id-ID") : "";
};

export default InputField;
