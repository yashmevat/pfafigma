import CAFHelpSection from "./components/CAFHelpSection";
import ProgramsSection from "./components/ProgramSection";
import QuoteSection from "./components/QuotaSection";


export default function Home() {
  return (
    <div>
      <QuoteSection/>
      <ProgramsSection/>
      <CAFHelpSection/>
    </div>
  );
}
