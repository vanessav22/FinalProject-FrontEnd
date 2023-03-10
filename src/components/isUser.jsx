import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Private({ children }) {
  const { loading, loggedIn, user } = useContext(AuthContext);
  const [thisUser, setThisUser] = useState(null);

  const getUser = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/users/${id}`
    );
    setThisUser(response.data);
  };

  if (loading) return <p>Loading ...</p>;

  if (!loggedIn) {
    return <Navigate to="/login" />;
  } else if (!thisUser) {
    return <Navigate to="/profile" />;
  }
}

export default Private;
