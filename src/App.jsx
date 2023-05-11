// import { useState } from "react";
import React, { useState } from 'react';
import Explore from './components/ExploreSec.jsx';

function App() {
  const [displayComponent, setDisplayComponent] = useState("explore");

  function handleSelectChange(event) {
    setDisplayComponent(event.target.value);
  }

  function renderSelectedComponent() {
    switch (displayComponent) {
      case "chatbot":
        window.location.href = "https://www.google.com";
    return null;
    case "ex":
      window.location.href = "https://www.nimh.nih.gov/health/topics/suicide-prevention";
      return null;
      case "ex1":
        window.location.href = "https://sunny-blini-3f4aeb.netlify.app/";
        return null;
        case "ex2":
          window.location.href = "https://www.thelivelovelaughfoundation.org/helpline";
          return null;
      default:
        return <Explore />;
    }
  }

  return (
    <div className="App">
      <div id="header">
        <h4 className="header1">Mental Health Companion</h4>
        <nav>
          <li>
            <select value={displayComponent} onChange={handleSelectChange}> 
              <option>More
              </option>
              <option value="ex2">Helpline Number</option>
              <option value="ex">Suicidal Helpline Number</option>
              <option value="ex1">About us</option>
            </select>
          </li>
        </nav>
      </div>
      <div>{renderSelectedComponent()}</div>
    </div>
  );
}

export default App;

