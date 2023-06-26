import React from "react";
import  "../styles.css";
import PropTypes from "prop-types";

export default function SessionsToolType({ active, payload }) {
    
  if (active) {
    return (
      <div className="tooltip-container">
        <div className="tooltip-text">{payload[0].value}min</div>
      </div>
    );
  }
  return null;
}

SessionsToolType.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};