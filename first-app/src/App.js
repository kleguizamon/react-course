import Blog from "./components/Blog/";

function App() {
  const handleClick = () => console.log("Click");

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
  };
  return (
    <div>
      <Blog />
      <button onClick={handleClick}>Click me</button>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div>
        <label>Surname</label>
        <input type="text" name="surname" onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
