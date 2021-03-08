import React from "react";
import Child from "./components/Child";

function App() {
  const handleCallback = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Child callback={handleCallback} />
    </div>
  );
}

export default App;
