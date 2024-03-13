"use client";
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import classNames from "classnames";
const DarkLight = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-violet-300 flex items-center z-50 md:cursor-pointer transition-all duration-300 md:hover:scale-110 md:hover:bg-violet-400 dark:bg-violet-700 md:dark:hover:bg-violet-600"
    >
      <span
        className={classNames(
          " transition-all duration-[400ms] w-7 h-7 flex items-center justify-center bg-violet-700 dark:bg-violet-500 rounded-full",
          {
            "ml-5": theme === "dark",
          }
        )}
      >
        {theme === "light" ? (
          <FaCloudMoon className="text-gray-200" size={14} />
        ) : (
          <FaCloudSun className="" size={18} />
        )}
      </span>
      <span></span>
    </div>
  );
};

export default DarkLight;
