import React from "react";

function ComponentOne(props) {
  const { sendInfo, callback, number } = props;
  //mandamos en la funcion que estamos ejecutando el numero
  const getRandom = () => callback(Math.random());

  return (
    <div>
      <h2>{sendInfo}</h2>
      <button onClick={getRandom}>Generate number</button>
      {number && <div>{number}</div>}
    </div>
  );
}

export default ComponentOne;
