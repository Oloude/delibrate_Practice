import Flashcard from "./components/Flashcard";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function App() {
  return <QueryClientProvider client={queryClient}>
   <main className='min-h-screen bg-slate-100 flex  p-6 font-serif'>
    <Flashcard/>
  </main>
  </QueryClientProvider>
}
