import {
  DiReact,
  DiPython,
  DiJava,
  DiJavascript1,
  DiNodejs,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const IconArray = [
  {
    element: (
      <DiReact
        className="h-[60px] w-[60px] mx-[4px]"
        color="61DAFB"
        aria-label="React Icon"
        key="React Icon"
      />
    ),
  },
  {
    element: (
      <SiTypescript
        color="3077C6"
        className="h-[50px] w-[60px] mx-[4px]"
        aria-label="TypeScript Icon"
        key="TypeScript Icon"
      />
    ),
  },
  {
    element: (
      <DiJavascript1
        key="JavaScript Icon"
        className="h-[60px] w-[60px] mx-[4px]"
        color="FCDC00"
        aria-label="JavaScript Icon"
      />
    ),
  },
  {
    element: (
      <DiNodejs
        className="h-[60px] w-[60px] mx-[4px]"
        color="44843D"
        aria-label="NodeJS Icon"
        key="NodeJS Icon"
      />
    ),
  },
];

const IconSection = (): JSX.Element => (
  <section className="w-full flex items-center justify-around mb-10">
    {IconArray.map((icon) => icon.element)}
  </section>
);

export { IconSection };
