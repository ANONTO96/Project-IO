import React from 'react';

const Installation = () => {
    const apps = [
    { id: 1, name: "Forest: Focus For Productivity", size: "256 MB", rating: 4.8 },
    { id: 2, name: "Forest: Focus For Productivity", size: "256 MB", rating: 4.8 },
    { id: 3, name: "Forest: Focus For Productivity", size: "256 MB", rating: 4.8 },
  ];
    return (
        <div className="p-6 bg-base-200 min-h-screen">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Your Installed Apps</h1>
        <p className="text-sm text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">{apps.length} Apps Found</span>

        <select className="select select-bordered select-sm">
          <option>Sort By Size</option>
          <option>Sort By Name</option>
          <option>Sort By Rating</option>
        </select>
      </div>

      {/* App list */}
      <div className="space-y-3">
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-base-100 p-4 rounded-lg shadow-sm border border-gray-200 hover:border-gray-400 hover:scale-101 transition-all duration-200"
          >
            {/* Left section */}
            <div className="flex items-center gap-4">
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded-md"></div>

              {/* App info */}
              <div>
                <h2 className="font-medium text-sm">{app.name}</h2>

                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span className="text-success font-medium">▲ 5%</span>

                  <span className="flex items-center gap-1">
                    ⭐ {app.rating}
                  </span>

                  <span>{app.size}</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <button className="btn btn-success btn-sm text-white">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Installation;