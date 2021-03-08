import React, { useState } from "react";
import logo from "./logo.svg";

const App = () => {
  //   const [arrFruit] = useState(["banana", "apple", "melon", "oranje"]);
  const [showImage, setShowImage] = useState();

  const handleClick = () => {
    setShowImage((showImage) => !showImage);
  };

  return (
    <div>
      <button onClick={handleClick}>Show image</button>
      {showImage === true && <img src={logo} alt="testImage" />}
      {/* <ul>
        {arrFruit.map((fruit, key) => {
          return <li key={key}>{fruit}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default App;