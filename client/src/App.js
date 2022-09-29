import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <div className="main-box">
        <label>Food Name:</label>
        <input type="text"></input>
        <label>Food Name:</label>
        <input type="number"></input>
      </div>
      <button className="add-btn">Add To List</button>
    </div>
  );
}

export default App;
