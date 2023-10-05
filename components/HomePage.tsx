import React from 'react';
export default function Home() {

  
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        
        backgroundImage: 'url("https://iili.io/J2qTQ5l.png")',
        minHeight: '100vh', 
      }}
    >
    
    <div className="flex justify-center items-center h-screen">
  <div className="w-full sm:w-1/2 px-10 py-10 sm:px-1">
    <div className="group relative cursor-pointer overflow-hidden bg-white px-4 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg">
    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 max-w-md">
        <div className="flex items-center space-x-4">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="h-10 w-10 text-white transition-all">
              <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/>
            </svg>
          </span>
          <h3 className="text-lg font-bold text-gray-800">Hello! How are you?</h3>
        </div>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>This is our Pokémon world, here you can see your stats including the great battles you have done, you can also see all the Pokémon available and the ones you have caught!</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7"></div>
        <div className="ml-auto mt-8 mb-4 mr-4 relative z-20">
        <img
          src="https://iili.io/J2qonTX.png"
          border="0"
          alt="Pokemon Friends"
          className="absolute bottom-0 right-0 -mb-4 -mr-80 w-30 h-30"
        />
        </div>
      </div>
      
    </div>
    
  </div>
  
</div>
</div>
 
  );
};

