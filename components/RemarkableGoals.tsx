import React, { useEffect } from "react";
import {getCapturedPokemonCount, getInfofights} from "../services/GetRemarkableGoals";

export default function RemarkableGoals() {
  const [CatchedPokemons, setCatchePokemons] = React.useState(0);
  const [NumberWins, setNumberWins] = React.useState(0);
  const [TotalFights, setTotalFights] = React.useState(0);

  useEffect(() => {

    getInfofights().then((response) => {
      setNumberWins(response.totalWins);
      setTotalFights(response.totalFights);
    });

    getCapturedPokemonCount().then((response) => {
      setCatchePokemons(response);
    });

  }, []);
  

  const ColorBar = ({ color, width }: { color: string; width: string }) => (
    <div
      className={`bg-${color}-600 h-2.5 rounded-full ${
        color.includes("dark") ? "dark:bg-" : "bg-gray-"
      }200`}
    >
      <div
        className={`bg-${color}-600 h-2.5 rounded-full ${
          color.includes("dark") ? "dark:bg-" : "bg-gray-"
        }300`}
        style={{ width }}
      />
    </div>

    
  );
  return (

    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        
        backgroundImage: 'url("https://iili.io/J2qTQ5l.png")',
        minHeight: '100vh', 
      }}
    >
    <div className="flex justify-center items-center min-h-screen">
      
        <div className="flex">
        <div className="w-full max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 my-10 ml-[150px]">
          <div className="flex items-center">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              Remarkable Goals
            </h5>
          </div>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Discover and improve your skills with these statistics
          </p>
          <ul className="my-4 space-y-3">
              <li>
                <a
                  
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4"
                    viewBox="0 0 40 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Caught Pokemons {CatchedPokemons}
                  </span>
                </a>
                <div className="flex-start flex h-4 w-full overflow-hidden rounded bg-blue-gray-50 font-sans text-xs font-medium">
                <div
                  className="flex h-full items-baseline justify-center overflow-hidden break-all bg-pink-500 text-white"
                  style={{ width: "60%" }}
                >
                  60% Completed
                </div>
              </div>
              </li>
              <li>
                <a
                  
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover-bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5"
                    viewBox="0 0 292 292"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Battle Arena 
                  </span>
                </a>
                <div className="flex-start flex h-4 w-full overflow-hidden rounded bg-blue-gray-50 font-sans text-xs font-medium">
                <div
                  className="flex h-full items-baseline justify-center overflow-hidden break-all bg-blue-500 text-white"
                  style={{ width: "28%" }}
                >
                  28% Completed
                </div>
              </div>
              </li>
              <li>
                <a
                 
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover-bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5"
                    viewBox="0 0 75.591 75.591"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Fights {TotalFights}</span>
                </a>
                <div className="flex-start flex h-4 w-full overflow-hidden rounded bg-blue-gray-50 font-sans text-xs font-medium">
                <div
                  className="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white"
                  style={{ width: "49%" }}
                >
                  49% Completed
                </div>
                </div>
              </li>
              <li>
                <a
                  
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover-bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                   
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Wins {NumberWins}</span>
                </a>
                <div className="flex-start flex h-4 w-full overflow-hidden rounded bg-blue-gray-50 font-sans text-xs font-medium">
                <div
                  className="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-500 text-white"
                  style={{ width: "60%" }}
                >
                  60% Successful
                </div>
                </div>
              </li>
            </ul>
            <div>
            </div>
           
            
          </div>
          
          <div className="ml-[50px] mt-[100px]">
        <img
          src="https://iili.io/JdDOU74.png"
          border="0"
          alt="Pokemon Friends"
          className="w-80 h-80" 
        />
      </div>
      </div>
      </div>
      </div>
    
  );
}
