import React, { useContext, useEffect } from "react";
import UserContext from "../../context/users/UserContext";
import User from "./User";

const UserList = () => {
  const { getUsers, users, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-col items-center align-center">
      <h2 className="text-3xl font-bold text-green-400 underline">User List</h2>
      <ul className="w-full">
        {users.map((user) => (
          <User key={user.id} user={user} onSelected={getProfile} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
