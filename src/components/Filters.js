import React from "react";

function Filters({ onFilterChange }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => onFilterChange({ type: "search", value: e.target.value })}
      />
    </div>
  );
}

export default Filters;
