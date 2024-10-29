import Weather from "./components/Weather";
import {
  QueryClient,
  QueryClientProvider,

} from 'react-query'


const queryClient = new QueryClient()

export default function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
    <main className="bg-lightGray min-h-screen p-6 font-mono">
      <Weather/>
    </main>
    </QueryClientProvider>
  )
}