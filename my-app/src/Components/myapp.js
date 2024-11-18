import React, { useState } from 'react';

function MyApp() {
  // Destructure the useState return array into Counter and setCounter
  const [Counter, setCounter] = useState(15);
  
  const addValue = () => {
    // Use setCounter to update Counter state
    setCounter(Counter + 1);
    
  };

  const removeValue = () => {
    // Use setCounter to update Counter state
    setCounter(Counter - 1);
  };

  return (
    <>
      <h1>This is not a bug this is feature</h1>
      <h2> This is github checkup routine</h2>

      <div className="woostify-container">
        <a className="skip-link screen-reader-text" href="#site-navigation">
          Skip to navigation
        </a>
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>
        <div className="wrap-toggle-sidebar-menu">
          <span className="toggle-sidebar-menu-btn woostify-icon-bar">
            <span></span>
          </span>
        </div>
      </div>

      <h1>This is my react web</h1>

      {/* Display the Counter state */}
      <h2>Counter value: {Counter}</h2>

      {/* Attach onClick event to addValue function */}
      <button onClick={addValue}>Add value</button>
      <br />
      
      {/* Attach onClick event to removeValue function */}
      <button onClick={removeValue}>Remove Value</button>

      {/* Display the Counter state in the footer */}
      <p>Footer: {Counter}</p>
      <p>{Counter}</p>
    </>
  );
}

export default MyApp;
