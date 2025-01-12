import React from "react";

const Filter = ({ onFilterChange, activeFilter }) => {
  const filters = ["CSS/SASS", "JavaScript", "React", "SEO/Développement"];

  return (
    <div className="filters-buttons">
      <button
        className={!activeFilter ? "active" : ""}
        onClick={() => onFilterChange("")} // filtrer "Tous"
      >
        Tous
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === activeFilter ? "active" : ""}
          onClick={() => onFilterChange(filter)} // changer le filtre actif
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
