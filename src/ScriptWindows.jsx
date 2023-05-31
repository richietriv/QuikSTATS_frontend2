import React, { useEffect, useRef, useState } from "react";
import "./ScriptWindows.scss";
import socketIOClient from "socket.io-client";
import ScriptButton from "./ScriptButton";

const ScriptWindows = (props) => {
  const scrollingRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [data, setData] = useState([]);

  const scrollToBottom = () => {
    if (scrollingRef.current) {
      scrollingRef.current.scrollTop = scrollingRef.current.scrollHeight;
    }
  };

  const toggleAutoScroll = () => {
    setAutoScroll((prevAutoScroll) => !prevAutoScroll);
  };

  useEffect(() => {
    const socket = socketIOClient("http://localhost:9000/");

    socket.on("message", (arrData) => {
      const filteredData = arrData.filter(
        (arrItem) => arrItem.script_name === props.windowName
      );
      
      setData(
        filteredData.map((arrItem, index) => <li key={index}>{arrItem.name}</li>)
      );
      if (autoScroll) {
        scrollToBottom();
      }
    });

    return () => {
      socket.off("message");
    };
  }, [autoScroll]);

  useEffect(() => {
    if (autoScroll) {
      scrollToBottom(); // Scroll to bottom immediately when enabling autoscroll
    }
  }, [autoScroll, props.windowName]);

  return (
    <>
      <div className="scrolling-window" ref={scrollingRef}>
        <div className="window-name-container">
          <h1 className="window-name">{props.windowName}</h1>
          <div className="button-container">
            <button className="button" onClick={toggleAutoScroll}>
              {autoScroll ? "Disable Auto-Scroll" : "Enable Auto-Scroll"}
            </button>
            <ScriptButton scriptName={props.windowName}/>
          </div>
        </div>
        <ul>{data}</ul>
      </div>
    </>
  );
};

export default ScriptWindows;
