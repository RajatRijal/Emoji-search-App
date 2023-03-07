import React from "react";

const ResultItem = ({
  item: {
    _source: { emoji, label, tags },
  },
}) => {
  return (
    <div className="result-item">
      <h4>{label}</h4>
      <span id="emoji-wrapper" role="img" aria-label={label}>
        {emoji}
      </span>
      <div className="tags">
        {tags?.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ResultItem;
