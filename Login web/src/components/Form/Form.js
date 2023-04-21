import React, { useState } from "react";
import { useSelector } from "react-redux";

// that addUser is the action that is imported from the userSlice.js
// import { addUser } from "../../Redux/userSlice";

// that addUser is the action that is imported from the api.js
// import addUser from "../../Redux/api";
// import { loadingUser, errorUser } from "../../Redux/userSlice";

import { addingUser } from "../../Redux/userSlice";
import { useDispatch } from "react-redux";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);

    // that addUser is the action that is imported from the userSlice.js
    dispatch(addingUser({ name, email }));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full">
      <form
        className="w-full max-w-sm p-4 bg-white rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 text-xl font-bold text-center">Register</h1>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            id="username"
            type="text"
            // value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            id="email"
            type="email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <button
              className="px-4 py-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
              type="submit"
              // onSubmit={handleSubmit}
            >
              Submit
            </button>
          )}
          <a
            className="inline-block text-sm font-medium text-indigo-500 align-baseline hover:text-indigo-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        {error && loading === false && (
          <div className="flex items-center justify-center">
            <p className="text-red-500"> Error </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
