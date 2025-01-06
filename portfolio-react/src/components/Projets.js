import React, { useState } from "react";
import Bloc from "./Bloc";
import Card from "./Card";
import Filter from "./Filters";

const Projets = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div id="projets-content">
      <h2>Mes projets</h2>
      <Filter onFilterChange={handleFilterChange} activeFilter={activeFilter} />
      <Bloc title="projets.json" className="projets-text">
        <div className="section-cards">
          <Card activeFilter={activeFilter} />
        </div>
      </Bloc>
    </div>
  );
};

export default Projets;
