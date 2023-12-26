import React from "react";
// import Users from "./Users/Users";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Carpage from "./Carpage/Carpage";
import Car from "./Car/Car";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Users /> */}
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Login' element={<Login />} />
        <Route path='Carpage' element={<Carpage />} />
        <Route path='Car' element={<Car />} />
        {/* <Route path='Users' element={<Users />} /> */}
      </Routes>
    </div>
  );
}

export default App;
