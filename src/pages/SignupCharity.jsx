import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignupCharity() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeofCharity, setTypeofCharity] = useState("");
  const [image, setImage] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescritpion] = useState("");
  const [urlLink, setUrlLink] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleTypeofCharity = (e) => setTypeofCharity(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleNumber = (e) => setNumber(e.target.value);
  const handleDescription = (e) => setDescritpion(e.target.value);
  const handleUrlLink = (e) => setUrlLink(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signupcharity`,
        { name, email, password }
      );
      console.log(response.data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <label htmlFor="UrgencyNumber">Urgency</label>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={handleNumber}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />

        {/*
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Type of Charity
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Animals
            </a>
            <a className="dropdown-item" href="#">
              Homeless People
            </a>
            <a className="dropdown-item" href="#">
              Families & Children
            </a>
            <a className="dropdown-item" href="#">
              Enviroment
            </a>
          </div>
        </div> */}

        <button type="submit">Create account</button>
      </form>

      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </section>
  );
}

export default SignupCharity;
