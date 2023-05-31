import SwitchOnAllScripts from "./SwitchOnAllScripts.jsx";

const ScriptsList = ({ onScriptSelect, selectedScripts }) => {
  const handleClick = (itemName) => {
    onScriptSelect(itemName);
  };

  return (
    <>
      <SwitchOnAllScripts />
      <ul>
        <li
          onClick={() => handleClick("ArcGIS_main")}
          className={`button ${
            selectedScripts.includes("ArcGIS_main") ? "selected" : ""
          }`}
        >
          <span className={`light ${selectedScripts.includes("ArcGIS_main") ? "on" : "off"}`}></span>
          ArcGIS Main
        </li>
        <li
          onClick={() => handleClick("NH_main")}
          className={`button ${
            selectedScripts.includes("NH_main") ? "selected" : ""
          }`}
        >
          <span className={`light ${selectedScripts.includes("NH_main") ? "on" : "off"}`}></span>
          NH Main
        </li>
        <li
          onClick={() => handleClick("CAD_Sender_NEW")}
          className={`button ${
            selectedScripts.includes("CAD_Sender_NEW") ? "selected" : ""
          }`}
        >
          <span className={`light ${selectedScripts.includes("CAD_Sender_NEW") ? "on" : "off"}`}></span>
          CAD Sender NEW
        </li>
        <li
          onClick={() => handleClick("LSBUD0")}
          className={`button ${
            selectedScripts.includes("LSBUD0") ? "selected" : ""
          }`}
        >
          <span className={`light ${selectedScripts.includes("LSBUD0") ? "on" : "off"}`}></span>
          LSBUD0
        </li>
      </ul>
    </>
  );
};

export default ScriptsList;