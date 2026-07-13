import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  return (
    <nav>
      {parts.map((part, idx) => {
        const path = "/" + parts.slice(0, idx + 1).join("/");
        return (
          <span key={path}>
            <Link to={path}>{part}</Link>
            {idx < parts.length - 1 && " > "}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
