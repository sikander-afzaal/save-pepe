import SectionStart from "../../components/SectionStart";
import About from "./About";
import Faq from "./Faq";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <SectionStart bg="bg-main" word="About" />
      <About />
      <SectionStart bg="bg-[#C02600]" word="Tokenomic" />
      <Tokenomics />
      <SectionStart bg="bg-[#25894B]" word="Roadmap" />
      <Roadmap />
      <SectionStart bg="bg-[#5A5257]" word="frequently questioned answers" />
      <Faq />
    </div>
  );
};

export default Home;
