import Create from "./components/Create";
import Grow from "./components/Grow";
import Maintain from "./components/Maintain";
import Manage from "./components/Manage";
import Percent from "./components/Percent";
import Schedule from "./components/Schedule";
import Social from "./components/Social";
import Write from "./components/Write";

export default function App() {
  return (
    <main className="p-6 font-DM_Sans min-h-screen bg-purpleF">
      <section className="grid grid-cols-1 grid-flow-row gap-6 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto_auto] ">
        <Social/>
        <Create/>
        <Manage/>
        <Maintain/>
        <Schedule/>
        <Grow/>
        <Percent/>
        <Write/>
        
      </section>
    </main>
  )
}