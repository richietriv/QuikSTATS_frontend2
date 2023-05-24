import React from "react";

const ScriptsList = ({ onScriptSelect, selectedScripts }) => {
  const handleClick = (itemName) => {
    onScriptSelect(itemName);
  };

  return (
    <ul>
      <li
        onClick={() => handleClick("ArcGIS_main")}
        className={`button ${
          selectedScripts.includes("ArcGIS_main") ? "selected" : ""
        }`}
      >
        ArcGIS Main
      </li>
      <li
        onClick={() => handleClick("NH_main")}
        className={`button ${
          selectedScripts.includes("NH_main") ? "selected" : ""
        }`}
      >
        NH Main
      </li>
      <li
        onClick={() => handleClick("CAD_Sender_NEW")}
        className={`button ${
          selectedScripts.includes("CAD_Sender_NEW") ? "selected" : ""
        }`}
      >
        CAD Sender NEW
      </li>
      <li
        onClick={() => handleClick("LSBUD0")}
        className={`button ${
          selectedScripts.includes("LSBUD0") ? "selected" : ""
        }`}
      >
        LSBUD0
      </li>
    </ul>
  );
};

export default ScriptsList;