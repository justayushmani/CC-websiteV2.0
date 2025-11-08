import Landing from "../components/Landing";
import Offering from "../components/Offering";
import About from "../components/about";

export default function HomePage() {
  return (
    <div className="w-full  overflow-x-hidden">
      <Landing />
      <Offering/>
      <About />
    </div>
  );
}