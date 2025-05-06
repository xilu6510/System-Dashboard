import React from "react";
import { assets } from "../assets/assets";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between py-2 px-5 shadow-md">
      {/* TopBar - left side */}
      <div className="flex items-center">
        <img src={assets.site_logo} href="/" width="50px" />
        <div className="min-w-[100px] flex justify-center underline">Login</div>
      </div>

      {/* TopBar - right side */}

      <div>
        <form action="submit" className="flex items-center">
          <input
            type="text"
            className="block py-1.5 px-2 w-full text-sm text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg focus:border-indigo-800 mr-3"
            placeholder="Search documents"
            required
          />
          <div type="submit">
            <img src={assets.search_icon} width="20px" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopBar;
