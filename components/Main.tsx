import { TitleSection } from "./TitleSection"
import { IconSection } from "./IconSection"
import { About } from "./About"

const Main = (): JSX.Element => (
    <main className='w-full flex flex-col justify-center items-center'>
        <TitleSection />
        <IconSection />
        <About />
    </main>
)

export { Main }