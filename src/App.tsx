import { useState } from 'react';
// Layout
import { Header } from "./components/layout/Header"
import { NotaInput } from "./components/layout/NotaInput"
import { Footer } from "./components/layout/Footer"
import { NotaTotal } from "./components/layout/NotaTotal"

// UI
import { Button } from "./components/ui/button"

interface Nota {
  peso: number;
  nota: number;
  activa: boolean;
}

export function App() {
  const [notas, setNotas] = useState<Nota[]>([{ peso: 0, nota: 0, activa: false }]);

  const agregarNota = () => {
    setNotas((prevNotas) => [...prevNotas, { peso: 0, nota: 0, activa: false }]);
  };

  const actualizarNota = (index: number, nuevaNota: Partial<Nota>) => {
    setNotas((prevNotas) =>
      prevNotas.map((nota, i) =>
        i === index ? { ...nota, ...nuevaNota } : nota
      )
    );
  };

  const calcularNotaTotal = () => {
    const notasActivas = notas.filter((nota) => nota.activa);
    const pesoTotal = notasActivas.reduce((total, nota) => total + nota.peso, 0);

    if (pesoTotal === 0) return "0";

    const sumaNotas = notasActivas.reduce((total, nota) => total + (nota.nota * (nota.peso / 100)), 0);

    return sumaNotas.toFixed(1);
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <main className="flex flex-col items-center flex-grow w-80 xl:w-[27%]">
        {notas.map((nota, index) => (
          <NotaInput
            key={index}
            numeroNota={index + 1}
            peso={nota.peso}
            nota={nota.nota}
            activa={nota.activa}
            actualizarNota={(nuevaNota) => actualizarNota(index, nuevaNota)}
          />
        ))}
        <NotaTotal notaTotal={calcularNotaTotal()} />
        <Button className="w-full mt-10 bg-[#2790db] hover:bg-[#51b7ff]" onClick={agregarNota}>
          + Añadir nota
        </Button>
      </main>
      <Footer />
    </div>
  );
}
