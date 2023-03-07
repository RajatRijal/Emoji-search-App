import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import appbasejs from 'appbase-js';
import './index.css';
import ResultsRenderer from './components/ResultsRenderer';

var appbaseRef = appbasejs({
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "emoji-dataset",
  credentials: "f1da7b624918:3331c67d-3477-4b24-aa89-aefc6ca4683e"
});
const App=()=> {
  const [searchText, setSearchText]= useState("");
  const [isSearching, setIsSearching]=useState(false);
  const [results, setResults]=useState(null);
  const makeApiCall =() =>{
    setIsSearching(true);
    const SEARCH_ID ="emoji_search";
    appbaseRef
      .reactiveSearch(
        [
          {
            id: SEARCH_ID,
            size: 10,
            ...(searchText && { value: searchText })
          }
        ],
        {
          enableQueryRules:true
        }
      )
      .then(function (res) {
        setIsSearching(false);
        setResults(res[SEARCH_ID].hits.hits);
      })
      .catch(function (err) {
        console.log("search error: ", err);
      });
  };
  return(
    <div className='app-root'>
      <div className='input-wrapper'>
        <input className='input-search'
        name='search-field'
        type="text"
        onChange={(e)=> setSearchText(e.target.value)}
        value={searchText}
        placeholder="search emoji"
        />
        <button id='search-btn' onClick={makeApiCall}>search</button>
      </div>
      <div className="result-wrapper">
        <ResultsRenderer results={results} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
