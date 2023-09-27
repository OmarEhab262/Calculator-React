// App.js
import React, { useState } from "react";
import "./App.css";
import Operation from "./components/Operation";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input) || "0");
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "X") {
      setInput(input.slice(0, -1));
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="calc bg-[#303a53] sm:w-[500px] w-[400px] h-[600px] rounded-[20px] p-3">
        <div className="header w-[100%] bg-white h-[10%] rounded-[10px] py-2 px-3  flex flex-col">
          <div className="operation font-medium">{input}</div>
          <div className="result self-end">{result}</div>
        </div>
        <div className="body w-[100%] grid grid-cols-4 gap-4 grid-rows-5 mt-[30px]">
          <Operation
            name="C"
            onClick={handleButtonClick}
          />
          <Operation
            name="%"
            onClick={handleButtonClick}
          />
          <Operation
            name="X"
            onClick={handleButtonClick}
          />
          <Operation
            name="/"
            onClick={handleButtonClick}
          />
          <Operation
            name="1"
            onClick={handleButtonClick}
          />
          <Operation
            name="2"
            onClick={handleButtonClick}
          />
          <Operation
            name="3"
            onClick={handleButtonClick}
          />
          <Operation
            name="*"
            onClick={handleButtonClick}
          />
          <Operation
            name="4"
            onClick={handleButtonClick}
          />
          <Operation
            name="5"
            onClick={handleButtonClick}
          />
          <Operation
            name="6"
            onClick={handleButtonClick}
          />
          <Operation
            name="-"
            onClick={handleButtonClick}
          />
          <Operation
            name="7"
            onClick={handleButtonClick}
          />
          <Operation
            name="8"
            onClick={handleButtonClick}
          />
          <Operation
            name="9"
            onClick={handleButtonClick}
          />
          <Operation
            name="+"
            onClick={handleButtonClick}
          />
          <Operation
            name="00"
            onClick={handleButtonClick}
          />
          <Operation
            name="0"
            onClick={handleButtonClick}
          />
          <Operation
            name="."
            onClick={handleButtonClick}
          />
          <Operation
            name="="
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
