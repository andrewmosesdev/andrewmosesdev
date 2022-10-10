import { DiReact, DiPython, DiJava, DiJavascript1, DiNodejs } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'



const IconArray = [
    {
        element: <DiReact className="text-6xl " aria-label="React Icon" key="React Icon" style={{ color: '#61dafb' }} />
    },
    {
        element: <DiJavascript1 key="JavaScript Icon" className="text-6xl " aria-label="JavaScript Icon" style={{ color: '#FCDC00' }} />
    },
    {
        element: <SiTypescript className="text-6xl h-[40px] w-[50px] " aria-label="TypeScript Icon" key="TypeScript Icon" style={{ color: '#3077C6' }} />
    },
    {
        element: <DiNodejs className="text-6xl " aria-label="NodeJS Icon" keyaria-label="NodeJS Icon" style={{ color: '#44843D' }} />
    },
    {
        element: <DiPython color='#255074' className="text-6xl h-[55px] w-[50px]" aria-label="Python Icon" key="Python Icon" />
    },
    {
        element: <DiJava className="text-6xl h-[50px] w-[50px]" aria-label="Java Icon" key="Java Icon" style={{ color: '#E11F22' }} />
    }
]


const IconSection = (): JSX.Element => (
    <section className='w-full flex justify-around items-center flex-wrap mb-10 max-w-[220px] sm:max-w-[560px]'>
        {IconArray.map(icon => icon.element)}
    </section>
)

export { IconSection }