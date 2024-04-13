import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LayOutAAdmin = () => {
  return (
    <div className="relative  ">
      <div className=" flex flex-col items-center h-[750px] w-[200px]  fixed">
        <Aside />
      </div>
      <main className="pl-[224px]">
        <Header />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default LayOutAAdmin;
