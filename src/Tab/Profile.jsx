export default function ProfileTab({ data, setData, editing }) {
  return (
    <div className="space-y-4">
      <label className="block">
        <span className="font-semibold">Name</span>
        <input
          type="text"
          disabled={!editing}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="font-semibold">Email</span>
        <input
          type="email"
          disabled={!editing}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="font-semibold">Password</span>
        <input
          type="password"
          disabled={!editing}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
    </div>
  );
}
