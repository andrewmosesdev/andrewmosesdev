export default function Custom404() {
  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center">
      <div className="h-[200px] w-[300px] overflow-y-hidden flex items-center mb-[18px]">
        <iframe
          src="https://giphy.com/embed/8VSaCyIdcnbuE"
          width="300px"
          height="300px"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <span className="text-lg mb-[18px]">
        Oops - This page doesn&apos;t exist (yet)
      </span>
      <span className="text-lg">
        <a
          href="https://www.andrewmoses.dev"
          key="resume"
          className="rounded-sm border-2 p-1 mx-[10px] border-indigo-500 hover:bg-indigo-500 duration-300 text-indigo-500 hover:text-white "
          aria-label="Return to homepage"
        >
          Home
        </a>
      </span>
    </div>
  );
}
