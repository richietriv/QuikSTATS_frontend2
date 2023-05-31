import React, { useState } from "react";
import ScriptsList from "./ScriptsList";
import ScriptWindows from "./ScriptWindows";

const WindowVisibility = () => {
  const [selectedScripts, setSelectedScripts] = useState([]);
  const [scriptsStatus, setScriptsStatus] = useState({});

  const handleScriptSelect = (scriptName) => {
    if (selectedScripts.includes(scriptName)) {
      setSelectedScripts(selectedScripts.filter((name) => name !== scriptName));
    } else {
      setSelectedScripts([scriptName, ...selectedScripts]);
    }
  };

  const handleScriptToggle = (scriptName) => {
    setScriptsStatus((prevStatus) => ({
      ...prevStatus,
      [scriptName]: !prevStatus[scriptName]
    }));
  };

  return (
    <div className="mainWindow">
      <div className="selectionsContainer">
        <ScriptsList
          onScriptSelect={handleScriptSelect}
          selectedScripts={selectedScripts}
          scriptsStatus={scriptsStatus}
          onScriptToggle={handleScriptToggle}
        />
      </div>
      <div className="scriptWindowsContainer">
        {selectedScripts.map((scriptName) => (
          <ScriptWindows key={scriptName} windowName={scriptName} />
        ))}
      </div>
    </div>
  );
};

export default WindowVisibility;