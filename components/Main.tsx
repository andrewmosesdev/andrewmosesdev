import { TitleSection } from "./TitleSection";
import { IconSection } from "./IconSection";
import { About } from "./About";
import { ContactSection } from "./ContactSection";

const Main = (): JSX.Element => (
  <main className="w-full h-screen flex justify-center items-center">
    <div className="w-full sm:max-w-[560px]">
      <TitleSection />
      <IconSection />
      <About />
      <ContactSection />
    </div>
  </main>
);

export { Main };
