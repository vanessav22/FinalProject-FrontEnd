import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Home() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}

export default Home;
