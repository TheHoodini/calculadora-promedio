import { useState } from 'react';
// Layout
import { Header } from "@/components/layout/Header"
import { NotaInput } from "./components/layout/NotaInput"
import { Footer } from "./components/layout/Footer"
import { NotaTotal } from "./components/layout/NotaTotal"

// UI
import { Button } from "@/components/ui/button"


export function App() {
  // Estado que guarda la lista de componentes NotaInput
  const [notas, setNotas] = useState<number[]>([0]);

  // Función para añadir una nueva nota
  const agregarNota = () => {
    setNotas((prevNotas) => [...prevNotas, prevNotas.length]);
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <main className="flex flex-col items-center flex-grow w-80 xl:w-[27%]">
        {/* Renderizamos los componentes NotaInput basados en el estado */}
        {notas.map((_, index) => (
          <NotaInput key={index} numeroNota={index + 1} />
        ))}
        <NotaTotal />
        <Button className="w-full mt-10" onClick={agregarNota}>
          + Añadir nota
        </Button>
      </main>
      <Footer />
    </div>
  );
}
