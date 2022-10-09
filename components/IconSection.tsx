import { type } from 'os'
import { DiReact, DiPython, DiJava, DiJavascript1, DiNodejs } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'

type Icon = {
    element: JSX.Element;
}

type IconList = Icon[]

const IconArray: IconList = [
    {
        element: <DiReact className="text-6xl " aria-label="React Icon" style={{ color: '#61dafb' }} />
    },
    {
        element: <DiJavascript1 className="text-6xl " aria-label="JavaScript Icon" style={{ color: '#FCDC00' }} />
    },
    {
        element: <SiTypescript className="text-6xl h-[40px] w-[50px] " aria-label="TypeScript Icon" style={{ color: '#3077C6' }} />
    },
    {
        element: <DiNodejs className="text-6xl " aria-label="NodeJS Icon" style={{ color: '#44843D' }} />
    },
    {
        element: <DiPython color='#255074' className="text-6xl " aria-label="Python Icon" />
    },
    {
        element: <DiJava className="text-6xl " aria-label="Java Icon" style={{ color: '#E11F22' }} />
    }
]


const IconSection = (): JSX.Element => (
    <section className='flex items-center mb-10 max-w-[280px] sm:max-w-[560px]'>
        {IconArray.map(icon => icon.element)}
    </section>
)

export { IconSection }