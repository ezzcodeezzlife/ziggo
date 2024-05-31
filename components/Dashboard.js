import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vending Machine Analytics Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">User Sessions</h2>
          <p>Sample data for User Sessions</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Page Views</h2>
          <p>Sample data for Page Views</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Traffic Sources</h2>
          <p>Sample data for Traffic Sources</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Top Pages</h2>
          <p>Sample data for Top Pages</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Average Session Duration</h2>
          <p>Sample data for Average Session Duration</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">New vs. Returning Users</h2>
          <p>Sample data for New vs. Returning Users</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">User Demographics</h2>
          <p>Sample data for User Demographics</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Device Categories</h2>
          <p>Sample data for Device Categories</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Goal Completions</h2>
          <p>Sample data for Goal Completions</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Conversion Rates</h2>
          <p>Sample data for Conversion Rates</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
