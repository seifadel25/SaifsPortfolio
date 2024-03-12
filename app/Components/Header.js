"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

import data from "../../data/Header";
import HeaderInfo from "./HeaderInfo";
const Header = () => {
  const { image, name, jobTitle, address, experience, education } = data;
  return (
    <header className="pb-8 text-center flex flex-wrap flex-col md:flex-row items-center gap-x-8 gap-y-8">
      <div className="md:w-[240px] md:h-[280px] w-[200px] h-[200px] relative rounded-full overflow-hidden">
        <Image
          src={image}
          alt="Profile image"
          sizes="100%"
          fill
          className="w-full h-full object-cover rounded-full md:hover:scale-125 md:hover:rotate-12 transition-all duration-500"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-black capitalize font-Nunito text-violet-700 dark:text-white mt-4">
          {name}
        </h1>
        <h3 className=" text-lg md:text-xl capitalize font-semibold md:font-bold mt-2 dark:text-zinc-400">
          {jobTitle}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-4 mt-2 text-center gap-y-1">
          <HeaderInfo Icon={FaMapMarkerAlt} title={address} />
          <HeaderInfo Icon={BsFillTerminalFill} title={experience} />
          <HeaderInfo Icon={FaUserGraduate} title={education} />
        </div>
      </div>
    </header>
  );
};
export default Header;
