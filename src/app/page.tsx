import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="flex flex-col items-center text-center mb-16">
          <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 overflow-hidden bg-white dark:bg-gray-800">
            <Image src="/assets/icons/restro.svg" alt="Restro-Mate Logo" width={96} height={96} />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 text-indigo-700 dark:text-white">Restro-Mate</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
            The all-in-one solution for restaurants: billing, order management, inventory, purchase, analytics, and PDF creation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/demo">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded font-bold shadow transition-colors duration-200 hover:bg-indigo-700 hover:scale-105">Get Started</button>
            </Link>
            <Link href="/demo">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded font-bold shadow transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-800 hover:scale-105">Download Demo</button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/billing" className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center hover:ring-2 hover:ring-indigo-400 transition-all">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden bg-white dark:bg-gray-800">
              <Image src="/assets/icons/256x256.png" alt="Billing Icon" width={48} height={48} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Billing</h2>
            <p className="text-gray-600 dark:text-gray-300">Fast, accurate billing for dine-in, takeout, and delivery.</p>
          </Link>
          <Link href="/order" className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center hover:ring-2 hover:ring-indigo-400 transition-all">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden bg-white dark:bg-gray-800">
              <Image src="/assets/icons/256x256.png" alt="Order Icon" width={48} height={48} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Order Management</h2>
            <p className="text-gray-600 dark:text-gray-300">Track and manage orders from all sources in one place.</p>
          </Link>
          <Link href="/inventory" className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center hover:ring-2 hover:ring-indigo-400 transition-all">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden bg-white dark:bg-gray-800">
              <Image src="/assets/icons/256x256.png" alt="Inventory Icon" width={48} height={48} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Inventory</h2>
            <p className="text-gray-600 dark:text-gray-300">Real-time inventory tracking and alerts for low stock.</p>
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Link href="/purchase" className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center hover:ring-2 hover:ring-indigo-400 transition-all">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden bg-white dark:bg-gray-800">
              <Image src="/assets/icons/256x256.png" alt="Purchase Icon" width={48} height={48} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Purchase</h2>
            <p className="text-gray-600 dark:text-gray-300">Manage suppliers, purchase orders, and expenses easily.</p>
          </Link>
          <Link href="/analytics" className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 flex flex-col items-center hover:ring-2 hover:ring-indigo-400 transition-all">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden bg-white dark:bg-gray-800">
              <Image src="/assets/icons/256x256.png" alt="Analytics Icon" width={48} height={48} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Analytics & PDF</h2>
            <p className="text-gray-600 dark:text-gray-300">Visualize sales, inventory, and generate PDF reports.</p>
          </Link>
        </section>

        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-white">Ready to transform your restaurant?</h2>
          <Link href="/pricing">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded font-bold shadow text-xl transition-colors duration-200 hover:bg-indigo-700 hover:scale-105">Buy Restro-Mate</button>
          </Link>
        </section>
      </div>
    </main>
  );
}
       