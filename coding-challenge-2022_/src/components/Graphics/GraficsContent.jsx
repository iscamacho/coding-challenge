import React from "react";
import { Sunburns } from "./Sunburns";

export const GraficsContent = ({ selectedItem }) => {
  const getElement = (e) => {
    selectedItem(e);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>FORMULA 1</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title">Principales competidores</h5>

        <div>
          <Sunburns selectedItem={getElement}></Sunburns>
        </div>
      </div>
    </div>
  );
};
