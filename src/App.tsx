import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOutAAdmin from "./components/LayOutAAdmin";
import ListProdcut from "./page/dashboard/ListProdcut";
import Create from "./page/dashboard/Create";
import Update from "./page/dashboard/Update";
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayOutAAdmin />}>
        <Route path="/list" element={<ListProdcut/>}/>
        <Route path="/add" element={<Create/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
      </Route>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
