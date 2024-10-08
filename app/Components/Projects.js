"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import SectionW from "./SectionW";
import data from "../../data/projects";
import { RxEnter } from "react-icons/rx";
import Model from "./Model";
import { Button } from "./ui/moving-border";

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
          <div className="my-6" key={project.id}>
            <Button
              as={"div"}
              duration={5000}
              onClick={() => {
                toggleModel();
                setDetails(project);
              }}
              className=" cursor-pointer"
            >
              <div className="flex flex-wrap gap-5 w-full pl-4 pt-5 pb-5 items-center">
                <div className="relative w-full flex justify-center  md:w-[140px] h-[280px] md:h-32 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    className="w-4/6 md:w-full h-full object-contain"
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
            </Button>
          </div>
        ))}
      </SectionW>
    </>
  );
};

export default Projects;
