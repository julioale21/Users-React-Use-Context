import React, { useContext } from "react";
import UserContext from "../../context/users/UserContext";

const UserProfile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="flex flex-col justify-center items-center md:h-full">
          <h2 className="text-3xl font-bold text-green-400 mb-2">Profile Card</h2>
          <div className="flex flex-col justify-center items-center border border-gray-200 shadow-md bg-gray-50 p-8 rounded">
            <img
              alt={selectedUser.first_name}
              className="w-72 rounded-full object-contain border-4 border-green-100"
              src={selectedUser.avatar}
            />
            <h2 className="mt-4 text-green-500 font-extrabold text-xl">{`${selectedUser.first_name} ${selectedUser.last_name}`}</h2>
            <p className="mt-1 text-green-500 font-light text-lg">{selectedUser.email}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Ningun usuario seleccionado</p>
        </div>
      )}
    </>
  );
};

export default UserProfile;
