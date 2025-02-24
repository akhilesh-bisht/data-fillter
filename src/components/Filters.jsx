import { useState, useEffect } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";

export default function Filters({ onFilterChange, onClearFilters }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDealership, setSelectedDealership] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFilterChange({
        searchTerm,
        selectedDealership,
        selectedService,
        selectedMode,
        selectedStatus,
      });
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [
    searchTerm,
    selectedDealership,
    selectedService,
    selectedMode,
    selectedStatus,
  ]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedDealership("All");
    setSelectedService("All");
    setSelectedMode("All");
    setSelectedStatus("All");
    onClearFilters();
  };

  const handleExport = () => {
    alert("Exporting data... (Functionality to be implemented)");
  };

  return (
    <div className="flex flex-wrap gap-4 my-4 items-center">
      <span className="font-semibold">Filter by:</span>

      <select
        value={selectedDealership}
        onChange={(e) => setSelectedDealership(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">Dealership: All</option>
        <option value="AK Motors">AK Motors</option>
        <option value="SR Motors">SR Motors</option>
      </select>

      {/* Service Filter */}
      <select
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">Service Type: All</option>
        <option value="General Service">General Service</option>
        <option value="Express Service">Express Service</option>
      </select>

      {/* Mode Filter */}
      <select
        value={selectedMode}
        onChange={(e) => setSelectedMode(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">Mode of Order: All</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>

      {/* Status Filter */}
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">Status: All</option>
        <option value="In progress">In progress</option>
        <option value="Completed">Completed</option>
      </select>

      <div className="ml-10 flex items-center gap-3">
        {/* Export Button */}
        <button onClick={handleExport} className="p-2 rounded ">
          <FaDownload className="text-black" />
        </button>

        {/* Search Input */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="border pl-10 pr-4 py-2 rounded w-48"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button
          onClick={handleClearFilters}
          className="px-3 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
