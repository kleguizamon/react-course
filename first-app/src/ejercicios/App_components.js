import React, { useState } from "react";
import Blog from "./components/Blog";

function App() {
  const [message, setMessage] = useState(""); //inicializacion
  const [counter, setCounter] = useState(0); //inicializacion

  const handleClick = () => setMessage("soy un msg actualizado"); //actualizacion

  const handleChange = (e) => {
    //actualizacion
    const { value } = e.target;
    setMessage(value);
  };

  const handleCounter = () => {
    //actualizacion
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <span>Counter: {counter}</span>
      <button onClick={handleCounter}>Counter +1</button>
      <span>El valor del estado message: {message}</span>
      <Blog />
      <button onClick={handleClick}>Click me</button>
      <div>
        <label>Message</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
