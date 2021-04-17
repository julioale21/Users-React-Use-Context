import React from "react";

import "./App.css";
import UserList from "./components/users/UserList";
import UserProfile from "./components/users/UserProfile";
import UserState from "./context/users/UserState";

function App() {
  return (
    <UserState>
      <UserList />
      <UserProfile />
    </UserState>
  );
}

export default App;
