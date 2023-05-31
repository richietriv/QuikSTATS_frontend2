import React, { useState } from "react";
import axios from "axios";

const AllScriptsButton = () => {
  const [onScriptNames, setOnScriptNames] = useState([]);
  const [scriptsOn, setScriptsOn] = useState(false);
  const handleButtonClick = () => {
    if (scriptsOn) {
      // Stop scripts
      axios
        .post("http://localhost:9000/stop-all-scripts")
        .then((response) => {
            console.log(response)
            setScriptsOn(false);
          console.log("All scripts stopped successfully!");
        })
        .catch((error) => {
          console.error("Error stopping all scripts:", error);
        });
    } else {
      // Start scripts
      axios
        .post("http://localhost:9000/start-all-scripts")
        .then((response) => {
          console.log(response.data);
          setScriptsOn(true);
          console.log("All scripts started successfully!");
        })
        .catch((error) => {
          console.error("Error starting scripts:", error);
        });
    }
  };

  return (
     <div className="button-container">
      <div className="switch-button">
        <input type="checkbox" checked={scriptsOn} onChange={handleButtonClick} id="script-toggle" />
        <label htmlFor="script-toggle" className="slider round"></label>
      </div>
      <label htmlFor="script-toggle" className="button-label">
        {scriptsOn ? "Stop All" : "Start All"}
      </label>
    </div>
  );
};

export default AllScriptsButton;
