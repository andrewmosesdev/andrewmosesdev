import { SiLinkedin, SiGithub } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiPodcast } from "react-icons/bi";
import { motion } from "framer-motion";
import { VARIANT } from "./Constants";

const LINK_VARIANTS = {
  [VARIANT.HIDE]: {
    opacity: 0,
    y: 25,
  },
  [VARIANT.SHOW]: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.5 },
      y: { bounce: 0.5, duration: 1, type: "spring" },
    },
    y: 0,
  },
};

const contactLinks = [
  {
    element: (
      <motion.a
        variants={LINK_VARIANTS}
        href="https://www.linkedin.com/in/andrewjmoses/"
        key="linkedin"
        className="rounded-sm border-white border-2 p-2 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="Visit my Linkedin page"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin className="text-xl " />
      </motion.a>
    ),
  },
  {
    element: (
      <motion.a
        variants={LINK_VARIANTS}
        href="https://github.com/andrewmosesdev"
        key="github"
        className="rounded-sm border-white border-2 p-2 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="Visit my GitHub page"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub className="text-xl " />
      </motion.a>
    ),
  },
  {
    element: (
      <motion.a
        variants={LINK_VARIANTS}
        href="mailto: andrewmosesdev@gmail.com"
        key="email"
        className="rounded-sm border-white border-2 p-2 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="Send me an email"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail className="text-xl " />
      </motion.a>
    ),
  },
  {
    element: (
      <motion.a
        variants={LINK_VARIANTS}
        href="https://docs.google.com/document/d/1ATXNNyOWpP7TMpHcFFAZKqai5InChXYfKXqlFvj7yZ0/edit?usp=sharing"
        key="resume"
        className="rounded-sm border-white border-2 p-2 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="View my resume"
        target="_blank"
        rel="noreferrer"
      >
        <HiOutlineDocumentText className="text-xl " />
      </motion.a>
    ),
  },
  {
    element: (
      <motion.a
        variants={LINK_VARIANTS}
        href="https://www.codebrew.fm/"
        key="podcast"
        className="rounded-sm border-white border-2 p-2 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="Visit my podcast website"
        target="_blank"
        rel="noreferrer"
      >
        <BiPodcast className="text-xl " />
      </motion.a>
    ),
  },
];

const ContactSection = (): JSX.Element => (
  <section className="w-full sm:max-w-[560px] flex flex-col justify-center items-center">
    <motion.div
      className="flex mt-[16px]"
      variants={{
        [VARIANT.HIDE]: { opacity: 0 },
        [VARIANT.SHOW]: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {contactLinks.map((link) => link.element)}
    </motion.div>
  </section>
);

export { ContactSection };
