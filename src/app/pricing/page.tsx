export default function Pricing() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Restro-Mate Plans</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Choose the plan that fits your restaurant best. Compare features and
            pricing below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Lite Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-2 text-indigo-600">Lite</h2>
            <div className="text-3xl font-bold mb-4">₹999/mo</div>
            <ul className="mb-4 text-gray-600 dark:text-gray-300 text-left list-disc pl-4">
              <li>Billing</li>
              <li>Order Management</li>
              <li>Inventory (basic)</li>
              <li>PDF Creation</li>
            </ul>
            <div className="text-xs text-red-500 mb-2">
              No analytics, no purchase management, limited support
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded font-bold shadow hover:bg-indigo-700 transition-colors">
              Choose Lite
            </button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-2 text-indigo-600">Pro</h2>
            <div className="text-3xl font-bold mb-4">₹2499/mo</div>
            <ul className="mb-4 text-gray-600 dark:text-gray-300 text-left list-disc pl-4">
              <li>Billing</li>
              <li>Order Management</li>
              <li>Inventory (advanced)</li>
              <li>Purchase Management</li>
              <li>Analytics & PDF Creation</li>
              <li>Email Support</li>
            </ul>
            <div className="text-xs text-red-500 mb-2">
              No custom integrations
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded font-bold shadow hover:bg-indigo-700 transition-colors">
              Choose Pro
            </button>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center border border-yellow-400 dark:border-yellow-600">
            <h2 className="text-2xl font-bold mb-2 text-yellow-600">
              Enterprise
            </h2>
            <div className="text-3xl font-bold mb-4">₹4999/mo</div>
            <ul className="mb-4 text-gray-600 dark:text-gray-300 text-left list-disc pl-4">
              <li>All Pro features</li>
              <li>Custom Integrations</li>
              <li>Priority Support</li>
              <li>Multi-location Management</li>
            </ul>
            <div className="text-xs text-green-600 mb-2">
              Best for large restaurants & chains
            </div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded font-bold shadow hover:bg-yellow-600 transition-colors">
              Choose Enterprise
            </button>
          </div>
          {/* Custom Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-2 text-indigo-600">Custom</h2>
            <div className="text-3xl font-bold mb-4">Contact Us</div>
            <ul className="mb-4 text-gray-600 dark:text-gray-300 text-left list-disc pl-4">
              <li>Tailored features</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
              <li>Flexible pricing</li>
            </ul>
            <div className="text-xs text-indigo-500 mb-2">
              Perfect for unique business needs
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded font-bold shadow hover:bg-indigo-700 transition-colors">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
