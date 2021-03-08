import React from "react";

function ComponentTwo(props) {
  const { sendInfo, callback, number } = props;
  const getRandom = () => callback(Math.random(), "dos");

  return (
    <div>
      <h2>{sendInfo}</h2>
      <button onClick={getRandom}>Generate number</button>
      {number && <div>{number}</div>}
    </div>
  );
}

export default ComponentTwo;
