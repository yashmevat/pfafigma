import CAFHelpSection from "./components/CAFHelpSection";
import ProgramsSection from "./components/ProgramSection";
import QuoteSection from "./components/QuotaSection";
import FAQSection from "./components/FAQSection";
import Header from "./components/Header";
// import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <QuoteSection/>
      <ProgramsSection/>
      <CAFHelpSection/>
      <FAQSection/>
      {/* <Footer/> */}
    </div>
  );
}
