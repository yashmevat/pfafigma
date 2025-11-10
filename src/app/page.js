import Image from "next/image";
import Programs from "./components/Programs";
import CafAssessments from "./components/CafAssessments";
import CAFHelpSection from "./components/CAFHelpSection";
import ProgramsSection from "./components/ProgramSection";
import QuoteSection from "./components/QuotaSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
   <div className="w-full bg-white">
   <CafAssessments />
  <Programs />
      <QuoteSection/>
      <ProgramsSection/>
      <CAFHelpSection/>
      <FAQSection/>
      <FooterSection/>
    </div>
  );
}
