import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface NotaInputProps {
  numeroNota: number;
  peso: number | string; 
  nota: number | string;  
  activa: boolean;
  actualizarNota: (nuevaNota: Partial<{ peso: number | string; nota: number | string; activa: boolean }>) => void;
}

export function NotaInput({ numeroNota, peso, nota, activa, actualizarNota }: NotaInputProps) {

  const handlePesoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    actualizarNota({ peso: valor === '' ? '' : valor });
  };

  const handleNotaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    actualizarNota({ nota: valor === '' ? '' : valor });
  };

  return (
    <div className="w-full flex items-center justify-between mt-5">
      <div className="flex gap-5">
        <p className="flex items-center">Nota {numeroNota}</p>
        <Input
          className="w-20"
          placeholder="Peso"
          value={peso}
          label="%"
          onChange={handlePesoChange}
        />
      </div>
      <div className="flex items-center gap-5">
        <Input
          className="w-24"
          placeholder="Nota"
          step={0.01}
          value={nota}
          onChange={handleNotaChange}
        />
        <Checkbox checked={activa} onCheckedChange={(checked) => actualizarNota({ activa: checked === true })} />
      </div>
    </div>
  );
}
