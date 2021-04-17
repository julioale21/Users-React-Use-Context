import React, { useContext, useEffect } from "react";
import UserContext from "../../context/users/UserContext";

const UserList = () => {
  const { getUsers, users } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.first_name}</p>
      ))}
    </div>
  );
};

export default UserList;
