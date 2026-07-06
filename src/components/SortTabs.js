import React from "react";

function SortTabs({ active, onChange }) {
  const tabs = ["popular", "views", "recent"];

  return (
    <div className="sort-tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={active === tab ? "active" : ""}
          onClick={() => onChange(tab)}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default SortTabs;
