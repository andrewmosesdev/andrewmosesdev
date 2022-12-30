import { motion } from "framer-motion";
import { DiReact, DiJavascript1, DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { VARIANT } from "./Constants";

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
  <motion.section
    className="w-full sm:max-w-[560px] flex items-center justify-around mb-10"
    variants={{
      [VARIANT.HIDE]: {
        opacity: 0,
      },
      [VARIANT.SHOW]: {
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    }}
  >
    {IconArray.map((icon, index) => icon.element)}
  </motion.section>
);

export { IconSection };
