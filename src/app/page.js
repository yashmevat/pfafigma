import Image from "next/image";
import Programs from "./components/Programs";
import CafAssessments from "./components/CafAssessments";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <CafAssessments />
      <Programs />
    </div>
  );
}
