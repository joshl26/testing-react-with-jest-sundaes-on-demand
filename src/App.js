import { useState } from "react";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("midnightblue");
  const [boxChecked, setBoxChecked] = useState(false);
  const newButtonColor =
    buttonColor === "mediumvioletred" ? "midnightblue" : "mediumvioletred";

  return (
    <div>
      <button
        disabled={boxChecked}
        style={{
          backgroundColor: boxChecked ? "grey" : newButtonColor,
          color: "white",
        }}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {buttonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={boxChecked}
        onClick={() => {
          setBoxChecked(!boxChecked);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
