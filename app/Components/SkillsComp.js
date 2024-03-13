import classNames from "classnames";
import Image from "next/image";

const SkillsComp = ({ skill }) => {
  return (
    <div
      key={skill.id}
      className=" cursor-pointer px-3 py-2 flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:scale-110"
    >
      <div className="relative w-[25px] h-[25px]">
        <Image
          src={skill.image}
          alt={skill.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={classNames(
            "w-full h-full object-cover rounded-full md:hover:scale-125 md:hover:rotate-12 transition-all duration-500",
            { "bg-white rounded-full": skill.name === "next" }
          )}
        />
      </div>
      <span className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillsComp;
