import React, { useState } from "react";
import ComponentOne from "./ejercicios/callback/components/uno";
import ComponentTwo from "./ejercicios/callback/components/dos";

function App() {
  //creamos 3 estados: uno para el titulo
  //otro para el primer numero y otro para el segundo

  const [title, setTitle] = useState(false);
  const [number1, setNumer1] = useState(false);
  const [number2, setNumber2] = useState(false);

  function handleClick() {
    //se va a ejecutar cuando clickeamos en title
    if (number1 > number2) {
      setTitle("1");
    } else if (number2 > number1) {
      setTitle("2");
    }
  }

  function handleCallback(number, origin) {
    //se va a ejecutar cuando clickeamos generar numeros
    //se va a ejecutar dos veces
    //recibe dos parámetros, uno el número random
    //el otro es el origen.

    if (origin === "dos") {
      setNumber2(number);
    } else {
      setNumer1(number);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Title</button>
      <h1>{!title ? "generate number" : title}</h1>
      {/* //si no hay titulo mostra "genera los numeros" */}
      <ComponentOne
        sendInfo="Component One"
        callback={handleCallback}
        number={number1}
      />
      <ComponentTwo
        sendInfo="Component Two"
        callback={handleCallback}
        number={number2}
      />
    </div>
  );
}
export default App;
