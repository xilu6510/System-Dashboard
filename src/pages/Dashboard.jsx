import React from "react";
import { assets } from "../assets/assets";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div>
      {/* four buttons */}
      <div className="flex justify-end my-4">
        <div className="flex w-fit rounded-md border-1 border-black py-2 px-4 mx-2">
          <img
            src={assets.reset_icon}
            alt="reset to default icon"
            width="20px"
          />
          <p className="ml-2 text-sm"> Reset to Default</p>
        </div>

        <div className="flex w-fit rounded-md border-1 border-black py-2 px-4 mx-2">
          <img
            src={assets.export_icon}
            alt="export configuration icon"
            width="20px"
          />
          <p className="ml-2 text-sm">Export Configuration</p>
        </div>

        <div className="flex w-fit rounded-md border-1 border-black py-2 px-4 mx-2">
          <img
            src={assets.import_icon}
            alt="import configuration icon"
            width="20px"
          />
          <p className="ml-2 text-sm"> Import Configuration</p>
        </div>

        <div className="flex w-fit items-center rounded-md bg-blue-600 py-2 px-5 mx-2">
          <img src={assets.plus_icon} alt="add new icon" width="20px" />
          <p className="ml-2 text-sm text-white">New</p>
        </div>
      </div>

      {/* six status */}
      <div className="grid grid-cols-6 gap-2 auto-rows-[100px] mx-2 my-4">
        <div className="border-1 flex flex-col items-center justify-around">
          <p className="text-sm font-bold text-center">Open Orders</p>
          <h3 className="text-xl font-bold">32</h3>
        </div>

        <div className="border-1 flex flex-col items-center justify-around">
          <p className="text-sm font-bold text-center">Orders Shipping Today</p>
          <h3 className="text-xl font-bold">0</h3>
        </div>

        <div className="border-1 flex flex-col items-center justify-around">
          <p className="text-sm font-bold text-center">
            Orders Completed <br /> (Last 24 hours)
          </p>
          <h3 className="text-xl font-bold">4</h3>
        </div>

        <div className="border-1 flex flex-col items-center justify-around">
          <p className="text-sm font-bold text-center">Failed Orders</p>
          <h3 className="text-xl font-bold">0</h3>
        </div>

        <div className="border-1 flex flex-col items-center justify-around">
          <p className="text-sm font-bold text-center">Failed Shipments</p>
          <h3 className="text-xl font-bold">0</h3>
        </div>

        <div className="border-1 flex flex-col items-center justify-around">
          <p className="text-sm font-bold text-center">
            Other Failed Documents
          </p>
          <h3 className="text-xl font-bold">0</h3>
        </div>
      </div>

      {/* GMV(Last 30 Days) */}

      <div className="border border-gray-300 rounded-2xl shadow-lg bg-white flex flex-col items-center py-5 mx-2">
        <p className="text-sm">GMV (Last 30 Days)</p>
        <p className="text-sm">Total: $16,173</p>

        <div className="w-50 h-50 my-3">
          <Doughnut
            data={{
              labels: ["Zageno", "Test"],
              datasets: [
                {
                  label: "Count",
                  data: [34.5, 65.5],
                  backgroundColor: ["#36A2EB", "#FF6384"],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
