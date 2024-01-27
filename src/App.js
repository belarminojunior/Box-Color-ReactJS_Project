import { useState } from "react";

import Square from "./Square";
import Input from "./Input";

function App() {
  const [colorValue, setColorvcalue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorvcalue={setColorvcalue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
