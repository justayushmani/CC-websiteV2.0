import Landing from "../components/Landing";
import Offering from "../components/Offering";

export default function HomePage() {
  return (
    <div className="w-full  overflow-x-hidden">
      <Landing />
      <Offering/>
    </div>
  );
}