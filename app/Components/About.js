import Heading from "./Heading";
import data from "../../data/about";
import SectionW from "./SectionW";

const About = () => {
  return (
    <SectionW>
      <Heading>About</Heading>
      <div className="flex items-center md:justify-start justify-center md:text-start text-center">
        <h3 className="text-xl md:text-2xl font-semibold capitalize text-black dark:text-white">
          {data.heading}
        </h3>
        <span className="text-2xl md:text-3xl">👋</span>
      </div>
      <p className="mt-3 text-pretty leading-7  md:text-start text-center text-base md:text-lg font-semibold text-black dark:text-zinc-400">
        {data.bio}
      </p>
    </SectionW>
  );
};
export default About;
