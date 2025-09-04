export default function Order() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
        <span>[Order Image]</span>
      </div>
      <h1 className="text-4xl font-bold mb-4">Order Management</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Track and manage orders from all sources in one place.</p>
      <div className="bg-indigo-100 dark:bg-indigo-900 rounded p-6 shadow w-full max-w-lg text-center">
        <span className="text-xl">Dummy order management content goes here.</span>
      </div>
    </main>
  );
}
