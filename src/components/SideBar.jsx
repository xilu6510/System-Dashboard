import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [submenu, setSubmenu] = useState(false);

  const ShowSubmenu = () => {
    setSubmenu(!submenu);
  };
  return (
    <>
      <div className="w-[250px] shadow-md px-3 py-5 bg-black">
        {/* user profile infomation */}
        <NavLink
          onClick={ShowSubmenu}
          to="/account-information"
          className="p-3 rounded-md flex items-center justify-between bg-neutral-800 "
        >
          <div className="flex items-center">
            <img src={assets.user_icon} width="30px" className="mr-2" />
            <p className="text-white font-bold">My Profile</p>
          </div>
          <img
            src={submenu ? assets.arrow_up_icon : assets.arrow_down_icon}
            width="20px"
          />
        </NavLink>

        {/* User profile submenu */}

        <div className={submenu ? "block" : "hidden"}>
          <NavLink
            to="/account-information"
            className={({ isActive }) =>
              `flex items-center py-3 px-5 ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <p className="text-white ml-3">Account Inoformation</p>
          </NavLink>
          <NavLink
            to="/manage-users"
            className={({ isActive }) =>
              `flex items-center py-3 px-5 ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <p className="text-white ml-3">Manage Users</p>
          </NavLink>
          <NavLink
            to="/user-profile"
            className={({ isActive }) =>
              `flex items-center py-3 px-5 ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <p className="text-white ml-3">User Profile</p>
          </NavLink>
          <NavLink
            to="/profile-notifications"
            className={({ isActive }) =>
              `flex items-center py-3 px-5 ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <p className="text-white ml-3">Notifications</p>
          </NavLink>
          <NavLink
            to="/profile-message"
            className={({ isActive }) =>
              `flex items-center py-3 px-5 ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <p className="text-white ml-3">Messages</p>
          </NavLink>
        </div>

        {/* Main Menu */}

        <div className="border-y-1 border-stone-500 my-5 py-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center p-3 ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <img src={assets.dashboard_icon} width="20px" />
            <p className="text-white ml-3">Dashboard</p>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `flex items-center p-3 ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <img src={assets.orders_icon} width="20px" />
            <p className="text-white ml-3">Orders</p>
          </NavLink>

          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.inventory_icon} width="20px" />
              <p className="text-white ml-3">Inventorey</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.products_icon} width="20px" />
              <p className="text-white ml-3">Products</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>

          <NavLink
            to="/partners"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.partners_icon} width="20px" />
              <p className="text-white ml-3">Partners</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>

          <NavLink
            to="/reporting"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.reporting_icon} width="20px" />
              <p className="text-white ml-3">Reporting</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>

          <NavLink
            to="/files"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.files_icon} width="20px" />
              <p className="text-white ml-3">Files</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>

          <NavLink
            to="/connections"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.connections_icon} width="20px" />
              <p className="text-white ml-3">Connections</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.settings_icon} width="20px" />
              <p className="text-white ml-3">Settings</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center p-3 justify-between ${
                isActive ? "bg-indigo-800 rounded-md" : "bg-black"
              }`
            }
          >
            <div className="flex items-center">
              <img src={assets.help_icon} width="20px" />
              <p className="text-white ml-3">Help</p>
            </div>
            <img src={assets.arrow_down_icon} width="20px" />
          </NavLink>
        </div>

        {/* Logout section */}
        <NavLink
          to="/logout"
          className="p-3 rounded-md flex items-center justify-between bg-neutral-800"
        >
          <p className="text-white text-sm">Switch to Stage</p>

          <img src={assets.logout_icon} width="20px" />
        </NavLink>
      </div>
    </>
  );
};

export default SideBar;
