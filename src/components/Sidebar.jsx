import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaCar,
  FaUsers,
  FaClipboardList,
  FaUserTie,
  FaBoxes,
  FaTasks,
  FaCog,
  FaDatabase,
} from "react-icons/fa";

function Sidebar() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <>
      {!isNavOpen && (
        <button
          onClick={() => setIsNavOpen(true)}
          className="fixed left-2 top-4 bg-gray-300 p-2 rounded-md shadow-md cursor-pointer hover:bg-gray-400"
        >
          &gt;
        </button>
      )}

      {/* Sidebar */}
      {isNavOpen && (
        <aside className="w-64 bg-white p-4 h-screen flex flex-col justify-start gap-6 shadow-md">
          <div className="flex ml-60 justify-center items-center">
            {/* Close Sidebar Button */}
            <button
              onClick={() => setIsNavOpen(false)}
              className="text-xl border mt-6   border-gray-300 rounded-full   px-2 "
            >
              &lt;
            </button>
          </div>

          {/* Main Navigation */}
          <nav className="text-gray-600">
            <ul>
              {[
                { name: "Dashboard", icon: <FaTachometerAlt /> },
                { name: "Dealerships", icon: <FaCar /> },
                { name: "Customers", icon: <FaUsers /> },
                { name: "All Orders", icon: <FaClipboardList /> },
                { name: "Employees", icon: <FaUserTie /> },
              ].map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center p-2 rounded cursor-pointer ${
                    activeTab === item.name
                      ? "bg-red-100 text-red-500"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  <span
                    className={`mr-2 ${
                      activeTab === item.name ? "text-red-500" : "text-black"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>

          {/* Inventory Section */}
          <div className="border-t border-gray-300 pt-4 text-gray-600">
            <p className="text-gray-600 font-semibold">Inventory Management</p>
            <ul>
              <li
                className={`flex items-center p-2 rounded cursor-pointer ${
                  activeTab === "Inventory"
                    ? "bg-red-100 text-red-500"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("Inventory")}
              >
                <FaBoxes
                  className={`mr-2 ${
                    activeTab === "Inventory" ? "text-red-500" : "text-black"
                  }`}
                />
                Inventory
              </li>
              <li
                className={`flex items-center p-2 rounded cursor-pointer ${
                  activeTab === "Fulfillment Requests"
                    ? "bg-red-100 text-red-500"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("Fulfillment Requests")}
              >
                <FaTasks
                  className={`mr-2 ${
                    activeTab === "Fulfillment Requests"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                />
                Fulfillment Requests
                <span className="ml-auto bg-gray-200 text-sm px-2 py-1 rounded">
                  12
                </span>
              </li>
            </ul>
          </div>

          {/* Settings Section */}
          <div className="border-t border-gray-300 pt-4 text-gray-600">
            <p className="text-gray-600 font-semibold">Settings</p>
            <ul>
              <li
                className={`flex items-center p-2 rounded cursor-pointer ${
                  activeTab === "Vehicle Directory"
                    ? "bg-red-100 text-red-500"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("Vehicle Directory")}
              >
                <FaCog
                  className={`mr-2 ${
                    activeTab === "Vehicle Directory"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                />
                Vehicle Directory
              </li>
              <li
                className={`flex items-center p-2 rounded cursor-pointer ${
                  activeTab === "Services Database"
                    ? "bg-red-100 text-red-500"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("Services Database")}
              >
                <FaDatabase
                  className={`mr-2 ${
                    activeTab === "Services Database"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                />
                Services Database
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  );
}

export default Sidebar;
