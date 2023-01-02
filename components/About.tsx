import { motion } from "framer-motion";
import { VARIANT } from "./Constants";

const About = (): JSX.Element => (
  <section className="w-full sm:max-w-[560px] mb-10 px-[8px] whitespace-normal text-center">
    <motion.h3
      variants={{
        [VARIANT.HIDE]: { opacity: 0, y: 25 },
        [VARIANT.SHOW]: {
          opacity: 1,
          transition: {
            delay: 1.2,
            y: { bounce: 0.5, duration: 1, type: "spring" },
          },
          y: 0,
        },
      }}
    >
      Experienced software engineer and web developer located in Phoenix,
      Arizona. I focus on creating performant, scalable, and accessible
      applications.
    </motion.h3>
  </section>
);

export { About };
