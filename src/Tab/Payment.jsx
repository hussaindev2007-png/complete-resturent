export default function PaymentTab({ data, setData, editing }) {
  return (
    <div className="space-y-4">
      <label className="block">
        <span className="font-semibold">Tax Rate (%)</span>
        <input
          type="number"
          disabled={!editing}
          value={data.taxRate}
          onChange={(e) => setData({ ...data, taxRate: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="font-semibold">Service Charge (%)</span>
        <input
          type="number"
          disabled={!editing}
          value={data.serviceCharge}
          onChange={(e) => setData({ ...data, serviceCharge: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
    </div>
  );
}
