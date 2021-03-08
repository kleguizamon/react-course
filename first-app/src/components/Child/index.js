import React from "react";

const Child = (props) => {
  const handleClick = () => {
    props.callback("info de prueba");
  };

  return <button onClick={handleClick}>Disparar callback</button>
};

export default Child;
