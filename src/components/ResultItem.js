import React from "react";
import"../index.css";

const ResultItem = ({
  item: {
    _source: { emoji, label, },
  },
}) => {
  return (
    <div className="result-item">
      <div className="result-emoji" id="emoji-wrapper" role="img" aria-label={label}> {emoji}<br></br> 
      {label} </div>

    </div>
  );
};

export default ResultItem;
