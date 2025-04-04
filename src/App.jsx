import React, { useState } from 'react';
import './App.css';

function App() {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>
        Показать iframe
      </button>
      {showIframe && (
        <iframe
          src="https://muslim050.github.io/WebView/?subscriberId=12345"
          style="width: 100%; height: 600px; border: none;"
          title="Test Widget">
        </iframe>
      )}
    </div>
  );
}

export default App;
