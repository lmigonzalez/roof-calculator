import { useState } from "react";
import Form, { formValuesTypes } from "./components/Form";
import Result from "./components/Result";
import { Calculate } from "./logic";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [finalValue, setFinalValue] = useState(0);

  function getFinalValue(value: formValuesTypes) {
    setFinalValue(Calculate(value));
    setShowResult(true);
  }

  function closeResult() {
    setShowResult(false);
  }

  return (
    <main className=" min-h-screen pb-8">
      {showResult && <Result value={finalValue} closeResult={closeResult} />}

      <div className="w-1200px max-w-full m-auto flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl my-10">Roofing Calculator</h1>
        <div className="w-[900px] max-w-full m-auto py-8 px-4 border-[1px] border-gray-400 rounded-lg">
          <Form getValue={getFinalValue} />
        </div>
      </div>
    </main>
  );
}

export default App;