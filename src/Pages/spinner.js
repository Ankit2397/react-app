import { useState, CSSProperties } from "react";
import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#4382A1",
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClimbingBoxLoader
      speedMultiplier={1}
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;