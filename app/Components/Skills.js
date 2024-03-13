import Heading from "./Heading";
import SectionW from "./SectionW";
import data from "../../data/skills";
import SkillsComp from "./SkillsComp";

const Skills = () => {
  return (
    <SectionW>
      <Heading>Skills</Heading>
      <div className="flex flex-wrap items-center md:justify-start justify-center gap-5">
        {data.map((skill) => (
          <SkillsComp key={skill.id} skill={skill} />
        ))}
        
      </div>
    </SectionW>
  );
};
export default Skills;
