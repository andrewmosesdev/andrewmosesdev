const bracketL: string = "{";
const bracketR: string = "}";
const TitleSection = (): JSX.Element => (
    <section className="flex flex-col items-center text-center max-w-[280px] sm:max-w-[560px] mt-[10%]">
        <h1 className="text-6xl mb-10">
            {bracketL}
            <span className="text-5xl"> AM </span>
            {bracketR}
        </h1>
        <h2 className="text-3xl mb-10">Software Engineer | Web Developer</h2>
    </section>
);

export { TitleSection };
