import { SiLinkedin, SiGithub } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const contactLinks = [
  {
    element: (
      <a
        href="https://www.linkedin.com/in/andrewjmoses/"
        key="linkedin"
        className="rounded-sm border-white border-2 p-1 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="Visit my Linkedin page"
      >
        <SiLinkedin className="text-lg " />
      </a>
    ),
  },
  {
    element: (
      <a
        href="https://github.com/andrewmosesdev"
        key="github"
        className="rounded-sm border-white border-2 p-1 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="Visit my GitHub page"
      >
        <SiGithub className="text-lg " />
      </a>
    ),
  },
  {
    element: (
      <a
        href="mailto: andrewmosesdev@gmail.com"
        key="email"
        className="rounded-sm border-white border-2 p-1 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="Send me an email"
      >
        <AiOutlineMail className="text-lg " />
      </a>
    ),
  },
  {
    element: (
      <a
        href="https://docs.google.com/document/d/1ATXNNyOWpP7TMpHcFFAZKqai5InChXYfKXqlFvj7yZ0/edit?usp=sharing"
        key="resume"
        className="rounded-sm border-white border-2 p-1 mx-[10px] hover:border-indigo-500 hover:bg-indigo-500 duration-300"
        aria-label="View my resume"
      >
        <HiOutlineDocumentText className="text-lg " />
      </a>
    ),
  },
];

const ContactSection = (): JSX.Element => (
  <section className="w-full flex flex-col justify-center items-center">
    <h3 className="text-xl">Contact</h3>
    <div className="flex mt-[16px]">
      {contactLinks.map((link) => link.element)}
    </div>
  </section>
);

export { ContactSection };
