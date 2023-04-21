import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header/Header";
import Form from "../src/components/Form/Form";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  return (
    <div className="Container">
      <Header />
      <div className="flex">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}

export default App;
