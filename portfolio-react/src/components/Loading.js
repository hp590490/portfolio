import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="spanloading">
        {" "}
        <span>&#62;_</span>
      </div>
      <div className="pointloading">
        <span className="point"></span>
        <span className="point"></span>
        <span className="point"></span>
      </div>
    </div>
  );
};

export default Loading;
