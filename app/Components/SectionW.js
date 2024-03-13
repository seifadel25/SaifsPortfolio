const SectionW = ({ children }) => {
  return (
    <section className="py-10 ">
      <div className="border w-full bg-zinc-400 border-zinc-400 shadow-[ 0 50px 50px -12px rgb(0 0 0 / 0.25)] h-[45px] dark:border-zinc-800 mb-4"></div>
      {children}
    </section>
  );
};

export default SectionW;
