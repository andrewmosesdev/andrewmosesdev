import { TitleSection } from "./TitleSection";
import { IconSection } from "./IconSection";
import { About } from "./About";
import { ContactSection } from "./ContactSection";

const Main = (): JSX.Element => (
  <main className="w-full h-full sm:h-screen flex justify-center items-center px-[12px] pt-[32px] sm:pt-0">
    <div className="w-full sm:max-w-[560px]">
      <TitleSection />
      <IconSection />
      <About />
      <ContactSection />
    </div>
  </main>
);

export { Main };
