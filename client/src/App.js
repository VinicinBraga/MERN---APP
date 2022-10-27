import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>CUSTOMERS DATA</h1>
      </div>
      <div className="registration-container">
        <div className="registration">
          <h3>Registration</h3>
        </div>
        <div className="descripition">
          <h3>Project Description</h3>
          <input type="text" />
          <div className="add-btn-container">
            <button>Add to list</button>
          </div>
        </div>
      </div>
      <div className="customer-data">
        <h3>Customers Data</h3>
        <div>
          <h4>Nome do cliente</h4>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
