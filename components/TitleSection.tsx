import { motion } from "framer-motion";
import { VARIANT } from "./Constants";

const TitleSection = (): JSX.Element => (
  <section className="text-center w-full sm:max-w-[560px]">
    <motion.h1
      className="text-4xl mb-10"
      variants={{
        [VARIANT.HIDE]: { opacity: 0 },
        [VARIANT.SHOW]: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
    >
      Andrew Moses
    </motion.h1>
    <motion.h2
      className="text-2xl mb-10"
      variants={{
        [VARIANT.HIDE]: { opacity: 0 },
        [VARIANT.SHOW]: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
    >
      <span className="block sm:inline-block">Software Engineer</span>{" "}
      <span className="hidden sm:inline-block">|</span>{" "}
      <span className="block sm:inline-block">Web Developer</span>
    </motion.h2>
  </section>
);

export { TitleSection };
