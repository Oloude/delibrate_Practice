import Stopwatch from "./components/Stopwatch";

export default function App() {
  return <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-zinc-900">
    <h1 className="text-4xl text-center text-zinc-200 font-bold mb-16 lg:text-6xl">Stopwatch</h1>
    <Stopwatch/>
  </main>
}
