import React, { useState } from 'react';
import Explore from './components/ExploreSec/ExploreSec.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  const [displayComponent, setDisplayComponent] = useState("explore");

  function handleSelectChange(event) {
    setDisplayComponent(event.target.value);
  }

  return (
    <div className="App">
      <Header onSelectChange={handleSelectChange} displayComponent={displayComponent} />
      <Explore/>
    </div>
  );
}

export default App;
