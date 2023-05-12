import React, { useState } from 'react';
import Explore from './components/ExploreSec/ExploreSec.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  const [displayComponent, setDisplayComponent] = useState("explore");

  function handleSelectChange(event) {
    setDisplayComponent(event.target.value);
  }

  // function renderSelectedComponent() {
  //   switch (displayComponent) {
  //     case "chatbot":
  //       window.location.href = "https://www.google.com";
  //   return null;
  //   case "ex":
  //     window.location.href = "https://www.nimh.nih.gov/health/topics/suicide-prevention";
  //     return null;
  //     case "ex1":
  //       window.location.href = "https://sunny-blini-3f4aeb.netlify.app/";
  //       return null;
  //       case "ex2":
  //         window.location.href = "https://www.thelivelovelaughfoundation.org/helpline";
  //         return null;
  //     default:
        // return <Explore />;
  //   }
  // }

  return (
    <div className="App">
      <Header onSelectChange={handleSelectChange} displayComponent={displayComponent} />
      {/* <div>{renderSelectedComponent()}</div> */}
      <Explore/>
    </div>
  );
}

export default App;
