import React from "react";
import logo from "./asssets/images/logo.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={logo} alt="logo"></img>
        <div className="title">
          <h1>CUSTOMERS</h1>
        </div>
      </div>
      <div className="registration-container">
        <div className="register-left">
          <h3>Registration</h3>
          <div className="register-tag">
            <div className="register-label">
              <label>Name:</label>
            </div>
            <div className="register-input">
              <input type="text" placeholder="Customer name" />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>Phone:</label>
            </div>
            <div className="register-input">
              <input type="text" placeholder="Customer phone" />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>E-mail:</label>
            </div>
            <div className="register-input">
              <input type="text" placeholder="Customer e-mail" />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label className="address-title">Address</label>
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>Zip Code:</label>
            </div>
            <div className="register-input">
              <input type="text" placeholder="Customer ZIP code" />
            </div>
          </div>

          <div className="register-tag">
            <div className="register-label">
              <label>Street:</label>
            </div>
            <div className="register-input-row">
              <input id="street" type="text" placeholder="Customer Street" />
              <input id="number" type="text" placeholder="Number" />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>City:</label>
            </div>
            <div className="register-input">
              <input type="text" placeholder="Customer City" />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>Country:</label>
            </div>
            <div className="register-input">
              <input type="text" placeholder="Customer Country" />
            </div>
          </div>
        </div>
        <div className="description">
          <h3> ProjectDescription</h3>
          <div>
            <textarea type="text" />
          </div>
          <div className="add-btn-container">
            <button>Add to list</button>
          </div>
        </div>
      </div>
      <div className="customer-list">
        <h3>Customers Data</h3>
        <div className="customer-item">
          <h4>Nome do cliente e um nome</h4>
          <div className="customer-bts">
            <button className="Update">Update</button>
            <button className="Delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
