import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';

const ScriptButton = ({ scriptName }) => {
  const [scriptOn, setScriptOn] = useState(false);
  console.log(scriptOn)

  const handleButtonClick = () => {
    if (scriptOn) {
      // Stop script
      axios
        .post("http://localhost:9000/stop-script", { "script": scriptName })
        .then((response) => {
          console.log();
          console.log("Script stopped successfully!");
          setScriptOn(false);
        })
        .catch((error) => {
          console.error("Error stopping script:", error);
        });
    } else {
      // Start script
      axios
        .post("http://localhost:9000/start-script", { "script": scriptName })
        .then((response) => {
          console.log(response);
          console.log("Script started successfully!");
          setScriptOn(true);
        })
        .catch((error) => {
          console.error("Error starting script:", error);
        });
    }
  };

  useEffect(() => {
    // Fetch initial script status
    axios
      .get("http://localhost:9000/script-status")
      .then((response) => {
        
        console.log(response.data[scriptName],)
        setScriptOn(response.data[scriptName]);
      })
      .catch((error) => {
        console.error("Error fetching script status:", error);
      });
  }, []);

  useEffect(() => {
    // Subscribe to socket events for script status updates
    const socket = io("http://localhost:9000");
    socket.on("script-status-update", (data) => {
      if (data.script === scriptName) {
        setScriptOn(data.status);
      }
    });

    // Clean up the socket subscription
    return () => {
      socket.disconnect();
    };
  }, [scriptName]);



  return (
    <div>
      <button className="button" onClick={handleButtonClick}>
        {scriptOn ? "Stop Script" : "Start Script"}
      </button>
    </div>
  );
};

export default ScriptButton;
