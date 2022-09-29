import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [newFoodName, setNewFoodName] = useState("");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
    window.location.reload();
  };

  const updateFoodName = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName,
    });
    window.location.reload();
  };

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
    window.location.reload();
  };

  return (
    <div className="App">
      <h1 className="main-title">Title</h1>
      <div className="main-box">
        <label>Food Name:</label>
        <input
          type="text"
          onChange={(e) => setFoodName(e.target.value)}
        ></input>
        <label>Days Since You Ate It:</label>
        <input type="number" onChange={(e) => setDays(e.target.value)}></input>
      </div>
      <button className="add-btn" onClick={addToList}>
        Add To List
      </button>
      <div className="list-title">
        <h2>Food List</h2>
        {foodList.map((food, key) => {
          return (
            <div className="food-list" key={key}>
              <h4>{`Food: ${food.foodName}`}</h4>
              <h4>{`Days: ${food.daysSinceIAte}`}</h4>
              <input
                type="text"
                placeholder="New foof Name..."
                onChange={(e) => setNewFoodName(e.target.value)}
              ></input>
              <button
                className="update-btn"
                onClick={() => updateFoodName(food._id)}
              >
                Update
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteFood(food._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
