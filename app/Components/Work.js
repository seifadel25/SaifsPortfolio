"use client";
import Heading from "./Heading";
import SectionW from "./SectionW";
import data from "../../data/work";
import Image from "next/image";
import SkillsComp from "./SkillsComp";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Work = () => {
  return (
    <SectionW>
      <Heading>Work History</Heading>

      {data.map((work) => (
        <div key={work.id} className="mt-6 gap-x-6">
          <CardContainer className="w-full md:flex hidden inter-var justify-start">
            <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-violet-500/[0.3] hover:shadow-violet-400/[0.9] dark:bg-zinc-950/[0.7] dark:border-white/[0.2] border-black/[0.1] lg:w-[800px] xl:w-[1000px] md:w-[600px] w-full  h-auto rounded-xl p-2 border  ">
              <CardItem translateZ="50">
                <div className="relative w-[70px] h-[70px] rounded-3xl overflow-hidden   dark:border-zinc-700">
                  <Image
                    src={work.image}
                    alt={work.company}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardItem>
              <CardItem translateZ="60">
                <div className="flex-1">
                  <CardItem translateZ="60">
                    <h2 className="text-black dark:text-white capitalize font-bold text-base lg:text-lg ">
                      {work.role}
                    </h2>
                  </CardItem>
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
                    <div className="flex gap-2 gap-x-4 flex-wrap my-2 md:justify-start justify-center items-center">
                      {work?.skills?.map((skill) => (
                        <SkillsComp key={skill.id} skill={skill} />
                      ))}
                    </div>
                  )}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
          <div className=" w-full flex md:hidden bg-gray-50 relative group/card  dark:bg-zinc-950/[0.7] dark:border-white/[0.2] border-black/[0.1]   h-auto rounded-xl p-2 border  ">
            <div className="relative w-[70px] h-[70px] rounded-3xl overflow-hidden   dark:border-zinc-700">
              <Image
                src={work.image}
                alt={work.company}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <div className="flex gap-2 gap-x-4 flex-wrap my-2 md:justify-start justify-center items-center">
                  {work?.skills?.map((skill) => (
                    <SkillsComp key={skill.id} skill={skill} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </SectionW>
  );
};

export default Work;
