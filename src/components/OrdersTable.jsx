export default function OrdersTable({ orders }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4">
      <div className="grid grid-cols-7 gap-4 font-semibold text-gray-700 p-2 bg-gray-100 rounded-2xl">
        <span>Date</span>
        <span>Order ID</span>
        <span>Dealership</span>
        <span>Customer</span>
        <span>Service</span>
        <span>Mode</span>
        <span>Status</span>
      </div>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-7 mt-3 gap-4 p-2  items-center"
          >
            <span>{order.date}</span>
            <span>{order.id}</span>
            <span>{order.dealership}</span>
            <span>{order.customer}</span>
            <span>{order.service}</span>
            <span>{order.mode}</span>
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                order.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {order.status}
            </span>
          </div>
        ))
      ) : (
        <div className="text-center p-4 text-gray-500">No orders found</div>
      )}
    </div>
  );
}
