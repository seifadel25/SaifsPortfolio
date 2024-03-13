import Heading from "./Heading";
import SectionW from "./SectionW";
import data from "../../data/work";
import Image from "next/image";
import SkillsComp from "./SkillsComp";

const Work = () => {
  return (
    <SectionW>
      <Heading>Work History</Heading>
      {data.map((work) => (
        <div key={work.id} className="mt-6 flex gap-x-6">
          <div className="relative w-[70px] h-[70px] rounded-3xl overflow-hidden   dark:border-zinc-700">
            <Image
              src={work.image}
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-black dark:text-white capitalize font-bold text-base lg:text-lg ">
              {work.role}
            </h2>
            <span className="capitalize text-sm lg:text-base text-zinc-800 dark:text-zinc-400">
              {work.company}
            </span>
            <div className="flex items-center gap-x-1 ">
              <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                {work.type}
              </span>
              <span className="text-black dark:text-white">-</span>
              <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                {work.date}
              </span>
            </div>
            {work.skills && (
              <div className="flex gap-2 gap-x-4 flex-wrap my-2">
                {work?.skills?.map((skill) => (
                  <SkillsComp key={skill.id} skill={skill} />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </SectionW>
  );
};

export default Work;
