import React, { useState } from "react";
import Axios from "axios";
import "./style.css";

const Modal = ({ setIsVisible, customer }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newZipCode, setNewZipCode] = useState("");
  const [newStreet, setNewStreet] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newDistrict, setNewDistrict] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newCountry, setNewCountry] = useState("");

  const updateCustomer = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newName: newName,
      newPhone: newPhone,
      newEmail: newEmail,
      newZipCode: newZipCode,
      newStreet: newStreet,
      newNumber: newNumber,
      newDistrict: newDistrict,
      newCity: newCity,
      newState: newState,
      newCountry: newCountry,
    });
  };

  return (
    <div className="modal">
      <div className="container">
        <div className="content">
          <h3>Registration</h3>
          <div className="register-tag">
            <div className="register-label">
              <label>Name:</label>
            </div>
            <div className="register-input">
              <input
                type="text"
                placeholder="Update name"
                onChange={(e) => {
                  setNewName(e.target.value);
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
                placeholder="Update phone"
                onChange={(e) => {
                  setNewPhone(e.target.value);
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
                placeholder="Update e-mail"
                onChange={(e) => {
                  setNewEmail(e.target.value);
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
                placeholder="Update ZIP code"
                onChange={(e) => {
                  setNewZipCode(e.target.value);
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
                placeholder="Update Street"
                onChange={(e) => {
                  setNewStreet(e.target.value);
                }}
              />
              <input
                id="number"
                type="text"
                placeholder="Number"
                onChange={(e) => {
                  setNewNumber(e.target.value);
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
                placeholder="Update District"
                onChange={(e) => {
                  setNewDistrict(e.target.value);
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
                placeholder="Update City"
                onChange={(e) => {
                  setNewCity(e.target.value);
                }}
              />
              <input
                id="state"
                type="text"
                placeholder="State"
                onChange={(e) => {
                  setNewState(e.target.value);
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
                placeholder="Update Country"
                onChange={(e) => {
                  setNewCountry(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <button onClick={() => updateCustomer(customer._id)}>Update</button>
        <button onClick={() => setIsVisible(false)}>Close</button>
      </div>
      ;
    </div>
  );
};

export default Modal;
