import React from "react";

import "./App.css";
import UserList from "./components/users/UserList";
import UserProfile from "./components/users/UserProfile";
import UserState from "./context/users/UserState";

function App() {
  return (
    <UserState>
      <div className="grid grid-cols-2 font-body">
        <div className="col-span-2 md:col-span-1 p-6 order-last sm:order-first">
          <UserList />
        </div>
        <div className="col-span-2 md:col-span-1">
          <UserProfile />
        </div>
      </div>
    </UserState>
  );
}

export default App;
