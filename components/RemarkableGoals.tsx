import React from 'react';
export default function RemarkableGoals(){

    const ColorBar = ({ color, width }: { color: string; width: string }) => (
        <div className={`bg-${color}-600 h-2.5 rounded-full ${color.includes('dark') ? 'dark:bg-' : 'bg-gray-'}200`}>
          <div className={`bg-${color}-600 h-2.5 rounded-full ${color.includes('dark') ? 'dark:bg-' : 'bg-gray-'}300`} style={{ width }} />
        </div>
      );
    return(
        <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1170px] h-[688px] bg-white rounded-[10px] border-white">
        <div className="min-h-screen bg-gray-100 p-3 relative rounded-[20px]">
          <div className="flex">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 my-20  ml-[200px] ">
              <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Remarkable Goals
              </h5>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Discover and improve your skills with these statistics
              </p>
              <ul className="my-4 space-y-3">
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">

                                    <svg aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* ... Contenido SVG */}
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Caught Pokemons</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover-bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <svg aria-hidden="true" className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* ... Contenido SVG */}
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Battle Arena</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover-bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <svg aria-hidden="true" className="h-5" viewBox="0 0 75.591 75.591" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        {/* ... Contenido SVG */}
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Fights</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover-bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <svg aria-hidden="true" className="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* ... Contenido SVG */}
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Wins</span>
                                </a>
                            </li>
                        </ul>
                        <div>
                            <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover-underline dark:text-gray-400">
                                <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    {/* ... Contenido SVG */}
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="m-[100px]">
              <div>
              <div className="mb-1 text-base font-medium dark:text-white">Percentage</div>
                <ColorBar color="dark" width="45%" />

                <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Caught Pokemons</div>
                <ColorBar color="blue" width="45%" />

                <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">Battle Arena</div>
                <ColorBar color="red" width="45%" />

                <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Fights</div>
                <ColorBar color="green" width="45%" />

                <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Wins</div>
                <ColorBar color="yellow" width="45%" />

                <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">Indigo</div>
                <ColorBar color="indigo" width="45%" />

                
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
        