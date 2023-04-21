import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <div
      className=" flex flex-col  text-gray-100 px-4 py-4
    w-1/5 h-screen bg-blue-900"
    >
      <ul className="flex flex-col space-y-2">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Dashboard</li>
        <li>Welcome {userData.name}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
