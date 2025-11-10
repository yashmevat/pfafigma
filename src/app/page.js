import CAFHelpSection from "./components/CAFHelpSection";
import ProgramsSection from "./components/ProgramSection";
import QuoteSection from "./components/QuotaSection";
import FAQSection from "./components/FAQSection";


export default function Home() {
  return (
    <div>
      <QuoteSection/>
      <ProgramsSection/>
      <CAFHelpSection/>
      <FAQSection/>
    </div>
  );
}
