import React, { useState } from "react";
import logo from "./asssets/images/logo.png";
import Axios from "axios";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  const addtoList = () => {
    Axios.post("http://localhost:3001/insert", {
      name: name,
      phone: phone,
      email: email,
      street: street,
      number: number,
      district: district,
      city: city,
      state: state,
      country: country,
      description: description,
    });
    console.log(name);
    console.log(phone);
    console.log(email);
    console.log(zipCode);
    console.log(street);
    console.log(number);
    console.log(district);
    console.log(city);
    console.log(country);
    console.log(description);
  };

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
              <input
                type="text"
                placeholder="Customer name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>Phone:</label>
            </div>
            <div className="register-input">
              <input
                type="text"
                placeholder="Customer phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>E-mail:</label>
            </div>
            <div className="register-input">
              <input
                type="text"
                placeholder="Customer e-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
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
              <input
                type="text"
                placeholder="Customer ZIP code"
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="register-tag">
            <div className="register-label">
              <label>Street:</label>
            </div>
            <div className="register-input-row">
              <input
                id="street"
                type="text"
                placeholder="Customer Street"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
              <input
                id="number"
                type="text"
                placeholder="Number"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>District:</label>
            </div>
            <div className="register-input">
              <input
                type="text"
                placeholder="Customer District"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>City:</label>
            </div>
            <div className="register-input-row">
              <input
                id="city"
                type="text"
                placeholder="Customer City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <input
                id="state"
                type="text"
                placeholder="State"
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="register-tag">
            <div className="register-label">
              <label>Country:</label>
            </div>
            <div className="register-input">
              <input
                type="text"
                placeholder="Customer Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="description">
          <h3> Project Description</h3>
          <div>
            <textarea
              type="text"
              placeholder="Describe the project here!"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="add-btn-container">
            <button onClick={addtoList}>Add to list</button>
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
