import { TitleSection } from "./TitleSection";
import { IconSection } from "./IconSection";
import { About } from "./About";
import { ContactSection } from "./ContactSection";
import { motion } from "framer-motion";
import { VARIANT } from "./Constants";

const Main = (): JSX.Element => (
  <main className="w-full h-full flex flex-col justify-center items-center py-[32px] px-[8px]">
    <motion.div
      animate={VARIANT.SHOW}
      className="flex flex-col items-center"
      initial={VARIANT.HIDE}
      variants={{
        [VARIANT.HIDE]: { opacity: 0 },
        [VARIANT.SHOW]: {
          opacity: 1,
          transition: {
            staggerChildren: 0,
          },
        },
      }}
    >
      <TitleSection />
      <IconSection />
    </motion.div>

    <motion.div
      animate={VARIANT.SHOW}
      className="flex flex-col items-center"
      initial={VARIANT.HIDE}
      variants={{
        [VARIANT.HIDE]: { opacity: 0 },
        [VARIANT.SHOW]: {
          opacity: 1,
          transition: {
            staggerChildren: 1,
          },
        },
      }}
    >
      <About />
      <ContactSection />
    </motion.div>
  </main>
);

export { Main };
