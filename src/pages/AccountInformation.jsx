import React, { useState } from "react";
import { assets } from "../assets/assets";

const AccountInformation = () => {
  const [activeTab, setActiveTab] = useState("MERCHANDISING");

  const tabs = [
    "MERCHANDISING",
    "CONTACTS",
    "WAREHOUSES",
    "CLOSURES",
    "HOURS OF OPERATION",
  ];

  const partnersData = [
    { id: 1, accountNo: "130259", vendorNo: "11111", companyName: "Zageno" },
    {
      id: 2,
      accountNo: "130260",
      vendorNo: "22222",
      companyName: "example company name",
    },
  ];

  const [selected, setSelected] = useState("");
  return (
    <div className="m-2">
      {/* Account Basics & Company Logo */}

      <div className="grid grid-cols-2 gap-2 my-2">
        {/* Account Basics */}
        <div className="bg-white shadow-md rounded-md overflow-hidden ">
          <div className="text-white font-bold text-lg bg-black px-5 py-2">
            Account Basics
          </div>

          <div className="grid grid-cols-4 gap-2 px-5 py-3 ">
            {/* Table first row */}
            <div className="col-span-2">
              <p className="text-sm text-zinc-500">Account Name</p>
              <p className="text-black">Ambeed</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-zinc-500">Account Number</p>
              <p className="text-black">131863</p>
            </div>
            {/* Table first row */}
            <div className="col-span-2">
              <p className="text-sm text-zinc-500">Street 1</p>
              <p className="text-black">10 Clive Road</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-zinc-500">Street 2</p>
              <p className="text-black"></p>
            </div>
            {/* Table second row */}
            <div>
              <p className="text-sm text-zinc-500">City</p>
              <p className="text-black">Eastwood</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">State</p>
              <p className="text-black">NSW</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">ZIP Code</p>
              <p className="text-black">2122</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Country</p>
              <p className="text-black">Australia</p>
            </div>
            {/* Table third row */}
            <div className="col-span-2">
              <p className="text-sm text-zinc-500">Email</p>
              <p className="text-black">luluxixi420@gmail.com</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-zinc-500">Phone</p>
              <p className="text-black">0468960150</p>
            </div>
          </div>
        </div>
        {/* Company Logo */}
        <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
          <div className="text-white font-bold text-lg bg-black px-5 py-2 ">
            Company Logo
          </div>
          <div className="flex flex-col items-center justify-between m-3 border border-dotted flex-grow">
            <img src={assets.upload_file} alt="uplaod_file" width="100px" />
            <p className="text-xs text-center">
              Drop an image file here or click to choose an image.
            </p>
            <p className="text-xs text-center">
              This logo will be displayed on packing slips and on your company
              profile in the Discover Partners page.
            </p>
            <p className="text-xs text-center">
              Images more than 480 pixels tall or wide will be resized.
            </p>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="bg-white shadow-md rounded-md overflow-hidden w-full my-4">
        <div className="text-white font-bold text-lg bg-black px-5 py-2">
          Profile
        </div>

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm mx-2 px-4 py-4 text-zinc-500 cursor-pointer ${
              activeTab === tab ? "border-b-2 border-blue-600" : " border-0"
            }`}
          >
            {tab}
          </button>
        ))}

        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3 px-5 py-3">
            <p className="font-bold">Basics</p>
            {/* Table*/}

            <div className="grid grid-cols-2 gap-2 py-3 ">
              <div>
                <p className="text-sm text-zinc-500">Merchaniser first name</p>
                <p className="text-black"></p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Merchandiser last name</p>
                <p className="text-black"></p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Merchandiser title</p>
                <p className="text-black"></p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">
                  Merchandiser email address
                </p>
                <p className="text-black">example@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Website</p>
                <p className="text-black">www.example.com.au</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Categories</p>
                <p className="text-black">Cleaning Supplies</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Subcategory</p>
                <p className="text-black">
                  Building blocks, inhibitors, amino acids, peptides, catelysts
                </p>
              </div>
            </div>

            <button className="cursor-pointer py-2 px-5 border-1 border-black rounded-md">
              Edit
            </button>
          </div>

          <div className="col-span-2 px-5 py-3">
            <p className="font-bold">Description</p>
            <p className="py-3">
              Ambeed provides building blocks, inhibitors, amino acids,
              peptides, catelysts, organoboron, metal catalysts, and materials
              science-related products.
            </p>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="bg-white shadow-md rounded-md overflow-hidden w-full my-4">
        <div className="text-white font-bold text-lg bg-black px-5 py-2">
          Profile
        </div>
        <div className="p-4">
          <div>
            <table className="min-w-full">
              <thead>
                <tr className="border-b-1 border-zinc-300">
                  <th className="px-4 py-2 w-1/4 text-sm text-zinc-500 font-normal text-left">
                    Account Number
                  </th>
                  <th className="px-4 py-2 w-1/4 text-sm text-zinc-500 font-normal text-left">
                    Vendor Number
                  </th>
                  <th className="px-4 py-2 w-1/2 text-sm text-zinc-500 font-normal text-left">
                    Company Name
                    <div className="hidden">
                      <img src={assets.up_arrow_icon} alt="" width="15px" />
                      <img src={assets.down_arrow_icon} alt="" width="15px" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {partnersData.map((partner) => (
                  <tr key={partner.id} className="border-b-1 border-zinc-300">
                    <td className="px-4 py-2 ">{partner.accountNo}</td>
                    <td className="px-4 py-2">{partner.vendorNo}</td>
                    <td className="px-4 py-2">{partner.companyName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-2">
            <p>Rows per page:</p>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="px-1"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>

            <div></div>

            <div className="flex items-center">
              <img src={assets.previous_icon} alt="" width="18px" />
              <img src={assets.left_icon} alt="" width="18px" />
              <img src={assets.right_icon} alt="" width="18px" />
              <img src={assets.next_icon} alt="" width="18px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
