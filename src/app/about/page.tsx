export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4">About Restro-Mate</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
            Restro-Mate is designed to help restaurants manage billing, orders, inventory, purchases, analytics, and PDF creation—all in one platform. Our mission is to simplify restaurant operations and empower business owners with powerful tools and insights.
          </p>
          <div className="bg-indigo-100 dark:bg-indigo-900 rounded p-6 shadow w-full max-w-lg">
            <span className="text-xl">Learn more about our story and vision.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
