import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <p>App home</p>
      <Link to='/team'>go to team page</Link>
    </>
  );
}

export default App;
