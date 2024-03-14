"use client";

import Heading from "./Heading";
import SectionW from "./SectionW";
import data from "../../data/skills";
import SkillsComp from "./SkillsComp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);
  return (
    <SectionW>
      <Heading>Skills</Heading>
      <div className="flex flex-wrap items-center md:justify-start justify-center gap-5">
        {data.map((skill) => (
          <div
            key={skill.id}
            className=" duration-500 "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <SkillsComp key={skill.id} skill={skill} />
          </div>
        ))}
      </div>
    </SectionW>
  );
};
export default Skills;
