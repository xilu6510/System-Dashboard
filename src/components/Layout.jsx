import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex flex-1">
        <SideBar />
        <div className="bg-stone-100 flex flex-col flex-1">
          {" "}
          <Outlet />
        </div>

        {/* This will render Dashboard, Orders, etc. */}
      </div>
    </div>
  );
};

export default Layout;
