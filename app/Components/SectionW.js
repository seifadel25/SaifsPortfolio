import BorderShadow from "./BorderShadow";
const SectionW = ({ children }) => {
  return (
    <section className="py-10 ">
      <BorderShadow />
      {children}
    </section>
  );
};

export default SectionW;
