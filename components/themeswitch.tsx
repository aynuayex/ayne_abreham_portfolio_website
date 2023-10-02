"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";


export default function ThemeSwitch() {

  const { theme, toggleTheme } = useThemeContext();
  
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem]
    bg-opacity-80 backdrop-blur-lg border border-white 
    border-opacity-40 shadow-2xl rounded-full flex 
    justify-center items-center hover:scale-105 active:scale-105 
    hover:backdrop-blur-none hover:bg-opacity-100 transition-all dark:bg-gray-950/80
    dark:backdrop-blur-lg dark:hover:bg-gray-950 dark:border-dark/40"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
