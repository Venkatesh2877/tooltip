import React from "react";

export default function Tooltip(props) {
  const left = {
    top: "-1px",
    left: "105%",
  };

  const right = {
    top: "-1px",
    right: "105%",
  };

  const top = {
    top: "-35px",
    left: "0%",
  };

  const bottom = {
    top: "35px",
    left: "0%",
  };

  const styles = {
    ...(props.left && left),
    ...(props.right && right),
    ...(props.top && top),
    ...(props.bottom && bottom),
  };

  return (
    <div className="tooltip-container">
      <button className="toolTipButton">
        Press
        <span style={styles} className="toolTipMessage">
          Tooltip
        </span>
      </button>
    </div>
  );
}
