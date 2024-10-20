import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface NotaInputProps {
  numeroNota: number;
  peso: number;
  nota: number;
  activa: boolean;
  actualizarNota: (nuevaNota: Partial<{ peso: number; nota: number; activa: boolean }>) => void;
}

export function NotaInput({ numeroNota, peso, nota, activa, actualizarNota }: NotaInputProps) {
  return (
    <div className="w-full flex items-center justify-between mt-5">
      <div className="flex gap-5">
        <p className="flex items-center">Nota {numeroNota}</p>
        <Input
          className="w-24"
          placeholder="Peso (%)"
          value={peso}
          onChange={(e) => actualizarNota({ peso: parseFloat(e.target.value) || 0 })}
        />
      </div>
      <div className="flex items-center gap-5">
        <Input
          className="w-24"
          placeholder="Nota"
          value={nota}
          onChange={(e) => actualizarNota({ nota: parseFloat(e.target.value) || 0 })}
        />
        <Checkbox checked={activa} onCheckedChange={(checked) => actualizarNota({ activa: checked === true })} />
      </div>
    </div>
  );
}
