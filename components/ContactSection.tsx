import { SiLinkedin, SiGithub } from "react-icons/si"
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineDocumentText } from 'react-icons/hi'

const contactLinks = [
    {
        element: <a href="https://www.linkedin.com/in/andrewjmoses/" className="rounded-sm border-white border-2 p-1 mx-1">
            <SiLinkedin className="text-lg " />
        </a>
    },
    {
        element: <a href="https://github.com/andrewmosesdev" className="rounded-sm border-white border-2 p-1 mx-1">
            <SiGithub className="text-lg " />

        </a>
    },
    {
        element: <a href="mailto: andrewmosesdev@gmail.com" className="rounded-sm border-white border-2 p-1 mx-1">
            <AiOutlineMail className="text-lg " />
        </a>
    },
    {
        element: <a href="https://docs.google.com/document/d/1ATXNNyOWpP7TMpHcFFAZKqai5InChXYfKXqlFvj7yZ0/edit?usp=sharing" className="rounded-sm border-white border-2 p-1 mx-1">
            <HiOutlineDocumentText className="text-lg " />
        </a>
    },

]

const ContactSection = (): JSX.Element => (
    <section className="w-full flex flex-col justify-center items-center">
        <h4 className="text-xl">Contact</h4>
        <div className="flex mt-2">
            {contactLinks.map(link => link.element)}
        </div>

    </section>
)

export { ContactSection }