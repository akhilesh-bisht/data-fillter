import { useState } from "react";
import Sidebar from "./Sidebar";
import Filters from "./Filters";
import OrdersTable from "./OrdersTable";
import Navbar from "./Navbar";
export default function OrdersPage() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedDealership: "All",
    selectedService: "All",
    selectedMode: "All",
    selectedStatus: "All",
  });

  const orders = [
    {
      date: "23-05-2025",
      id: "V-545454",
      dealership: "AK Motors",
      customer: "Aman Upadhyay",
      service: "General Service",
      mode: "Online",
      status: "In progress",
    },
    {
      date: "23-05-2025",
      id: "V-545455",
      dealership: "SR Motors",
      customer: "Rahul Sharma",
      service: "Express Service",
      mode: "Offline",
      status: "Completed",
    },
    {
      date: "23-05-2025",
      id: "V-545455",
      dealership: "SR Motors",
      customer: "Rahul Sharma",
      service: "Express Service",
      mode: "Offline",
      status: "Completed",
    },
    {
      date: "23-05-2025",
      id: "V-545455",
      dealership: "SR Motors",
      customer: "Rahul Sharma",
      service: "Express Service",
      mode: "Offline",
      status: "Completed",
    },
    {
      date: "23-05-2025",
      id: "V-545455",
      dealership: "SR Motors",
      customer: "Rahul Sharma",
      service: "Express Service",
      mode: "Offline",
      status: "Completed",
    },
    {
      date: "23-05-2025",
      id: "V-545455",
      dealership: "SR Motors",
      customer: "Rahul Sharma",
      service: "Express Service",
      mode: "Offline",
      status: "Completed",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      (filters.selectedDealership === "All" ||
        order.dealership === filters.selectedDealership) &&
      (filters.selectedService === "All" ||
        order.service === filters.selectedService) &&
      (filters.selectedMode === "All" || order.mode === filters.selectedMode) &&
      (filters.selectedStatus === "All" ||
        order.status === filters.selectedStatus) &&
      order.customer.toLowerCase().includes(filters.searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 ml-4">
        <Navbar></Navbar>
        <h1 className="text-lg font-semibold ml-7">All Orders</h1>
        <Filters
          onFilterChange={setFilters}
          onClearFilters={() =>
            setFilters({
              searchTerm: "",
              selectedDealership: "All",
              selectedService: "All",
              selectedMode: "All",
              selectedStatus: "All",
            })
          }
        />
        <OrdersTable orders={filteredOrders} />
      </main>
    </div>
  );
}
