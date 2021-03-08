import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getData = await fetch('https://api.github.com/users/kleguizamon');
    const dataToJson = await getData.json();
    setUser(dataToJson);
  }

  return (
    <>
      <p>My name is: {user.name}</p>
      <p>I live: {user.location}</p>
      <p>My bio: {user.bio}</p>
    </>
  );
}

export default App;
