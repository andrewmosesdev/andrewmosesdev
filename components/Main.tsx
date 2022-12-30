import { TitleSection } from "./TitleSection";
import { IconSection } from "./IconSection";
import { About } from "./About";
import { ContactSection } from "./ContactSection";

const Main = (): JSX.Element => (
  <main className="w-full h-full flex justify-center items-center py-[32px] px-[8px]">
    <div className="w-full sm:max-w-[560px]">
      <TitleSection />
      <IconSection />
      <About />
      <ContactSection />
    </div>
  </main>
);

export { Main };
