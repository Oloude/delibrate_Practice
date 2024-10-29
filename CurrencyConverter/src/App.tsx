import Converter from "./components/Converter";
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
   <main className="bg-slate-400 min-h-screen flex flex-col gap-16 justify-center items-center font-serif p-6">
    <h1 className="text-slate-950 text-3xl font-bold text-center sm:text-5xl">Currency Converter</h1>
  <Converter/>
   </main>
   </QueryClientProvider>
  )
}