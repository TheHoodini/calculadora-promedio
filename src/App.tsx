import { useState } from 'react';
// Layout
import { Header } from "./components/layout/Header"
import { NotaInput } from "./components/layout/NotaInput"
import { Footer } from "./components/layout/Footer"
import { NotaTotal } from "./components/layout/NotaTotal"
import { BotonesNotas } from './components/layout/BotonesNota';

interface Nota {
  peso: number | string;
  nota: number | string;
  activa: boolean;
}

export function App() {
  const [notas, setNotas] = useState<Nota[]>([{ peso: '', nota: '', activa: false }]);

  const agregarNota = () => {
    setNotas((prevNotas) => [...prevNotas, { peso: '', nota: '', activa: false }]);
  };

  const removerUltimaNota = () => {
    setNotas((prevNotas) => prevNotas.slice(0, -1));
  };

  const actualizarNota = (index: number, nuevaNota: Partial<Nota>) => {
    setNotas((prevNotas) =>
      prevNotas.map((nota, i) => (i === index ? { ...nota, ...nuevaNota } : nota))
    );
  };

  const calcularNotaTotal = () => {
    const notasActivas = notas.filter((nota) => nota.activa && nota.peso !== '' && nota.nota !== '');
    const pesoTotal = notasActivas.reduce((total, nota) => total + parseFloat(nota.peso as string), 0);

    if (pesoTotal === 0) return '0.00';

    const sumaNotas = notasActivas.reduce(
      (total, nota) => total + (parseFloat(nota.nota as string) * (parseFloat(nota.peso as string) / 100)),
      0
    );

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
        <BotonesNotas
          agregarNota={agregarNota}
          removerUltimaNota={removerUltimaNota}
          hayMasDeUnaNota={notas.length > 1}
        />
      </main>
      <Footer />
    </div>
  );
}
