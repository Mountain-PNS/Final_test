import React from "react";

import { Outlet } from "react-router-dom";


const LayOutAAdmin = () => {
  return (

   
      <main className="">

        <div className="">
          <Outlet />
        </div>

      </main>

  );
};

export default LayOutAAdmin;
