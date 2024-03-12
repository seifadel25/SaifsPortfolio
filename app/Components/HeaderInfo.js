const HeaderInfo = ({ Icon, title }) => {
  return (
    <div className="flex items-center gap-x-2 mt-2">
      <Icon className="text-violet-700 dark:text-zinc-500" size={20} />
      <span className="capitalize text-sm md:text-base text-zinc-900 dark:text-zinc-100 font-semibold">
        {title}
      </span>
    </div>
  );
};

export default HeaderInfo;
