import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>CUSTOMERS DATA</h1>
      </div>
      <fieldset className="registration-container">
        <div className="registration">
          <h3>Registration</h3>
          <div className="register-inputs">
            <label>Name:</label>
            <input type="text" />
            <label>Phone:</label>
            <input type="text" />
            <label>E-mail:</label>
            <input type="text" />
            <div className="address-container">
              <label>Address:</label>
              <div>
                <label>Street:</label>
                <input type="text" id="street" />
                <label>Number:</label>
                <input type="text" id="number" />
              </div>
              <label>District:</label>
              <input type="text" />
              <label>City:</label>
              <input type="text" />
              <label>State:</label>
              <input type="text" />
              <label>Country:</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="descripition">
          <h3>Project Description</h3>
          <input type="text" />
          <div className="add-btn-container">
            <button>Add to list</button>
          </div>
        </div>
      </fieldset>
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
