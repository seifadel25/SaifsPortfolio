"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import SectionW from "./SectionW";
import data from "../../data/projects";
import { RxEnter } from "react-icons/rx";
import Model from "./Model";

const Projects = () => {
  const [state, setState] = useState(false);
  const [details, setDetails] = useState(null); // [1
  const toggleModel = () => {
    setState(!state);
  };
  return (
    <>
      <Model state={state} details={details} toggleModel={toggleModel} />
      <SectionW>
        <Heading>Projects</Heading>
        {data.map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10 items-center"
          >
            <div className="relative w-full flex justify-center  md:w-[140px] h-[280px] md:h-32 rounded-lg overflow-hidden">
              <img
                src={project.image}
                className="w-4/6 md:w-full h-full"
                alt={project.title}
              />
            </div>
            <div className="flex-1 ">
              <div className="flex space-x-3">
                <h2 className=" w-fit overflow-hidden text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[24px]">
                  {project.title}
                </h2>
                <span>
                  <RxEnter
                    onClick={() => {
                      toggleModel();
                      setDetails(project);
                    }}
                    className="text-[22px] text-zinc-900 cursor-pointer dark:text-white"
                  />
                </span>
              </div>

              <p className="text-sm md:text-base font-medium text-zinc-500 dark:text-zinc-500 mt-3">
                {project.description.length > 100 ? (
                  <span>{project.description.slice(0, 100)}...</span>
                ) : (
                  project.description
                )}
              </p>
            </div>
          </div>
        ))}
      </SectionW>
    </>
  );
};

export default Projects;
