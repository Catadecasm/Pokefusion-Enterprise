import React from 'react';
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center w-10/12 m-auto">
        <div className="hidden md:flex md:w-1/2 p-8">
        
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Welcome to our World!</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">This is our pokemon world, here you can see your stats including the great battles you have done, you can also see all the pokemon available and the ones you have caught!</p>
        <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out">Go to Home</a>
      </div>
    </div>
    </div>
  );
};

