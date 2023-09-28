import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogout, MdCatchingPokemon } from "react-icons/md";
import { GiPlantsAndAnimals, GiPodiumWinner } from "react-icons/gi";
import DialogLogOut from "./DialogLogOut";

export default function SideBarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openLogoutDialog = () => {
    setIsLogoutDialogOpen(true);
    
  };

  const closeLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
      </button>

      <div
        className={`fixed top-0 left-0 h-screen bg-white z-20 w-60 ${
          isOpen ? "translate-x-0 transition-transform" : "-translate-x-96 transition-transform"
        } transition duration-500 ease-in-out`}
      >
        <div className="flex flex-col justify-start item-center h-full overflow-y-auto">
          <div className="p-6 w-full bg-white z-20 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <h1 className="text-base text-center cursor-pointer font-bold text-gray-800 border-b border-gray-100 pb-4 w-full">
              Welcome
            </h1>
            {/* Trainer */}
            <Image
              src="/trainer.png"
              alt="Trainer Image"
              width={180}
              height={180}
              className="rounded-full ml-4"
            />
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
                  Analytics
                </h3>
              </div>
            </div>
            <div className="my-4">
            <div className="flex justify-end">
                <div className="flex flex-col items-end gap-2">
                  <div>
                    <div
                      className="flex items-center gap-2 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                      onClick={openLogoutDialog} // Abre el diálogo de logout al hacer clic en el botón de logout
                    >
                      <MdOutlineLogout className="text-lg text-gray-600 group-hover:text-white" />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Logout</h3>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            <DialogLogOut isOpen={isLogoutDialogOpen} closeModal={closeLogoutDialog} />
          </div>
        </div>
      </div>
    </div>
  );
}
