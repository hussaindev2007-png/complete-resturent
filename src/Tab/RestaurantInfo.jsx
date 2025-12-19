export default function RestaurantInfo({ data, setData, editing }) {
  return (
    <div className="space-y-4">
      <label className="block">
        <span className="font-semibold">Restaurant Name</span>
        <input
          type="text"
          disabled={!editing}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <label className="block">
        <span className="font-semibold">Address</span>
        <input
          type="text"
          disabled={!editing}
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      <label className="block">
        <span className="font-semibold">Contact</span>
        <input
          type="text"
          disabled={!editing}
          value={data.contact}
          onChange={(e) => setData({ ...data, contact: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
    </div>
  );
}
