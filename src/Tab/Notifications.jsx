export default function NotificationsTab({ data, setData, editing }) {
  return (
    <div className="space-y-4">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          disabled={!editing}
          checked={data.newOrders}
          onChange={() => setData({ ...data, newOrders: !data.newOrders })}
          className="w-4 h-4 accent-blue-600"
        />
        <span className={editing ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}>
          New Orders
        </span>
      </label>

      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          disabled={!editing}
          checked={data.reservations}
          onChange={() => setData({ ...data, reservations: !data.reservations })}
          className="w-4 h-4 accent-blue-600"
        />
        <span className={editing ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}>
          Reservations
        </span>
      </label>

      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          disabled={!editing}
          checked={data.lowStock}
          onChange={() => setData({ ...data, lowStock: !data.lowStock })}
          className="w-4 h-4 accent-blue-600"
        />
        <span className={editing ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"}>
          Low Stock Alerts
        </span>
      </label>
    </div>
  );
}
