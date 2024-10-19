// Layout
import { Header } from "@/components/layout/Header"
import { NotaInput } from "./components/layout/NotaInput"
import { Footer } from "./components/layout/Footer"
import { NotaTotal } from "./components/layout/NotaTotal"

// UI
import { Button } from "@/components/ui/button"


export function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex flex-col items-center flex-grow">
        <NotaInput />
        <NotaTotal />
        <Button className="w-80 mt-10">+ Añadir nota</Button>
      </main>
      <Footer />
    </div>
  )
}

