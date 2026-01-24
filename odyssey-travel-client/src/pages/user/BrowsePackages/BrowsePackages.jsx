import React from "react";
import useBrowsePackages from "./useBrowsePackages"; // Import our logic hook
import { useNavigate } from "react-router-dom";
export default function BrowsePackages() {
    const {
        packages,
        loading
    } = useBrowsePackages();

    const location=useNavigate();
    const toBookingPage=(packageId)=>{
      location("/user/book-package/${packageId}")
    }
    return (
        <div className="bg-white dark:bg-gray-700 min-h-screen min-w-screen font-sans transition-colors duration-300">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
                        Available Holiday Packages
                    </h1>
                </div>

                {/* Loading Message */}
                {loading && (
                    <p className="text-center font-bold text-blue-500 dark:text-blue-400 mb-10 animate-pulse text-lg">
                        Loading packages...
                    </p>
                )}

                {/* Package Listing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.length > 0 ? (
                        packages.map((pkg) => (
                            <div
                                key={pkg.package_id}
                                className="border dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow hover:shadow-xl dark:shadow-none transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{pkg.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                        {pkg.description}
                                    </p>
                                </div>

                                <div className="mt-4 border-t dark:border-gray-700 pt-4 flex items-center justify-between">
                                    <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                                        ₹{pkg.price}
                                    </p>
                                    <span className="text-xs text-gray-400 dark:text-gray-500 italic">
                                        Agent ID: {pkg.created_by_user_id}
                                    </span>
                                </div>

                                <button className="w-full mt-4 bg-gray-100 dark:bg-gray-700 py-2 rounded font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition" onClick={()=>toBookingPage(pkg.package_id)}>
                                    Select Package
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-400 dark:text-gray-500 text-lg">
                            No holiday packages available at the moment.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
