import React, { useState } from 'react';

function App() {
  // const [age, setAge] = useState(0);
  const [inputNumber, setInputNumber] = useState('');
  const [arrNumber, setArrNumber] = useState([]);

  const handleChange = (e) => {
    const { valueAsNumber } = e.target;
    // setAge(valueAsNumber);
    setInputNumber(valueAsNumber);
  };

  const handleClick = () => {
    const newArr = [...arrNumber, inputNumber];
    setArrNumber(newArr);
    setInputNumber('');
  };

  return (
    <div>
      <input type='number' onChange={handleChange} value={inputNumber} />
      <button onClick={handleClick}>Add to Array</button>
      <ul>
        {arrNumber.map((num, key) => {
          return <li key={key}>{num}</li>;
        })}
      </ul>

      {/* {age > 0 && (
        <> {age >= 18 ? <p>Sos mayor de edad</p> : <p>Sos menor de edad</p>}</>
      )} */}
    </div>
  );
}

export default App;
