import { IoMdCloseCircleOutline } from "react-icons/io";
import SkillsComp from "./SkillsComp";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import BorderShadow from "./BorderShadow";

const Model = ({ state, details, toggleModel }) => {
  return state ? (
    <div className=" flex items-center justify-center fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur-[2px]  z-[9999]">
      <IoMdCloseCircleOutline
        onClick={toggleModel}
        className="cursor-pointer text-[35px] absolute top-6 right-6 text-black dark:text-white"
      />
      <div className="max-w-screen-xl w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700 max-h-[80vh] overflow-auto">
        <div className="flex justify-center lg:justify-start  flex-wrap lg:space-x-6">
          <div className="relative w-5/6  md:w-2/6  rounded-lg overflow-hidden">
            <div className="xl:pt-[56.25%]  pt-[66.25%]  ">
              <img
                src={details.image}
                className="absolute inset-0 mx-auto w-5/6 h-full "
                alt={details.title}
              />
            </div>
          </div>
          <div className="flex-1 mt-5 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {details.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              {details.skills.map((skill) => (
                <SkillsComp key={skill.id} skill={skill} />
              ))}
            </div>
            <BorderShadow />
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={details.source_code}
                key={details.id}
                target="_blank"
                className="hover:scale-110  flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
              >
                <FaGithub
                  size={20}
                  className=" text-black dark:text-violet-600"
                />
                <span className=" dark:hover:text-black text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                  source code
                </span>
              </Link>
              <Link
                href={details.demo}
                key={details.id}
                target="_blank"
                className="hover:scale-110  flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2"
              >
                <TbWorldWww
                  size={24}
                  className=" text-black dark:text-zinc-400"
                />
                <span className="  dark:hover:text-black text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
                  demo{" "}
                </span>
              </Link>
            </div>
            <p className="text-base font-medium text-zinc-700 dark:text-zinc-400 leading-[20px] mt-3">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Model;
