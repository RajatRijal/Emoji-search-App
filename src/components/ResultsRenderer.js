import React from "react";
import ResultItem from "./ResultItem";

const ResultsRenderer = ({ results = [] }) => {
  const getResultItems = () => {
    if (!results) {
      return (
        <span id="no-results" role="img" aria-label={"no results"}>
          Do you want something Intresting, Go for it" 😉
        </span>
      );
    }
    if (Array.isArray(results) && !results.length) {
      return (
        <span id="no-results" role="img" aria-label={"no results"}>
          🤕 Nothing relevant found!!! Try something else.
        </span>
      );
    }
    return results.map((resultItem) => {
      return <ResultItem key={resultItem._id} item={resultItem} />;
    });
  };

  return <div className="results-renderer">{getResultItems()}</div>;
};

export default ResultsRenderer
