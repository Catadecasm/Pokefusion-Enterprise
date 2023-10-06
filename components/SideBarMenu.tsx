import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogout, MdCatchingPokemon } from "react-icons/md";
import { GiPlantsAndAnimals, GiPodiumWinner } from "react-icons/gi";
import DialogLogOut from "./DialogLogOut";
import {logOut} from "../services/LogOutService";

export default function SideBarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  const openLogoutDialog = () => {
    logOut().then((response) => {
      setIsLogoutDialogOpen(true);
     });
  };

  const closeLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };

  return (
    <div className="relative">
    <button
      className="fixed top-4 left-4 inline-flex items-center justify-center rounded-md p-3 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-30"
      onClick={toggleSlide}
    >
      <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
    </button>

    <div
      className={`fixed top-0 left-0 h-screen bg-white z-20 w-60 transform ${
        isOpen ? "translate-x-0" : "-translate-x-60"
      } transition-transform duration-500 ease-in-out`}
      style={{
        overflowY: isOpen ? "auto" : "hidden",
      }}
    >
    
        <div className="flex flex-col justify-start item-center h-full w-full overflow-x-hidden">
          <div className="flex flex-col items-center mt-8 -mx-2">
            <h1 className="text-base text-center font-bold text-gray-800 border-b border-gray-100 pb-4 w-full">
              Welcome
            </h1>
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://iili.io/JdDOgkl.png"
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
              John Doe
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              john@example.com
            </p>
          </div>

          <div className="my-4 border-b border-gray-100 pb-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
              <MdCatchingPokemon className="text-lg text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                My Pokemons
              </h3>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
              <GiPlantsAndAnimals className="text-lg text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Pokedex
              </h3>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
              <GiPodiumWinner className="text-lg text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                <a href="/analytics">Analytics</a>
              </h3>
            </div>
          </div>
          <div className="my-4">
            <div className="flex justify-end">
              <div className="flex flex-col items-end gap-2">
                <div>
                  <div
                    className="flex items-center gap-3 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                    onClick={openLogoutDialog}
                  >
                    <MdOutlineLogout className="text-lg text-gray-600 group-hover:text-white" />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                      Logout
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogLogOut isOpen={isLogoutDialogOpen} closeModal={closeLogoutDialog} />
        </div>
      </div>

      <button
    className="fixed top-4 left-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
    onClick={toggleSlide}
  >
  
  </button>
    </div>
  );
}
