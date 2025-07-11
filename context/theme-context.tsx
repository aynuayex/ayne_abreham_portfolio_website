"use client";

import React
// , { useEffect, useState, createContext, useContext }
 from "react";
import { ThemeProvider } from "next-themes";

// type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void;
// };

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

// const ThemeContext = createContext<ThemeContextType | null>(null);

// export default function ThemeContextProvider({
//   children,
// }: ThemeContextProviderProps) {
//   const [theme, setTheme] = useState<Theme>("light");

//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//       window.localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       setTheme("light");
//       window.localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   };

//   useEffect(() => {
//     let localTheme = window.localStorage.getItem("theme") as Theme | null;
//     if (localTheme) {
//       setTheme(localTheme);
//       if (localTheme === "dark") {
//         document.documentElement.classList.add("dark");
//       }
//     } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//       setTheme("dark");
//       document.documentElement.classList.add("dark");
//     }
//   }, []);
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useThemeContext() {
//   const context = useContext(ThemeContext);

//   if (context === null) {
//     throw new Error(
//       "useThemeContext hook must be used inside a ThemeContextProvider"
//     );
//   }
//   return context;
// }
