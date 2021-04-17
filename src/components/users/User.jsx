import React from "react";

const User = ({ user, onSelected }) => {
  return (
    <div className="overflow-hidden bg-white rounded w-full shadow-lg leading-normal my-2 p-2">
      <a className="flex items-center" href="#!" onClick={() => onSelected(user.id)}>
        <img alt={user.first_name} className="rounded-full object-contain w-20" src={user.avatar} />
        <p className="ml-6">{`${user.first_name} ${user.last_name}`}</p>
      </a>
    </div>
  );
};

export default User;
