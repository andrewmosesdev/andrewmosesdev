const bracketL = "{";
const bracketR = "}";

const TitleSection = (): JSX.Element => (
  <section className="flex flex-col items-center text-center max-w-[280px] sm:max-w-[560px] mt-[10%]">
    <h1 className="text-6xl mb-10">
      <span className="text-5xl block">
        {" "}
        {bracketL} AM {bracketR}{" "}
      </span>
      <span className="text-3xl mb-10">Software Engineer | Web Developer</span>
    </h1>
  </section>
);

export { TitleSection };
