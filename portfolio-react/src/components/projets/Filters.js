import React from "react";
import PropTypes from "prop-types";

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
Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};
export default Filter;
