import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { userData } = useSelector((state) => state.user);
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-3">
      <div className="flex items-center">
        <img
          className="h-8 w-auto mr-2"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <span className="font-semibold text-xl tracking-tight">Azena Art</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="#"
            >
              {userData.name}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
