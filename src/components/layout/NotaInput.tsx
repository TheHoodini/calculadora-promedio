import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface NotaInputProps {
  numeroNota: number;
}

export function NotaInput({ numeroNota }: NotaInputProps) {
  return (
    <div className="w-full flex items-center justify-between mt-5">
      <div className="flex gap-5">
        <p className="flex items-center">Nota {numeroNota}</p>
        <Input className="w-24" placeholder="Peso (%)" />
      </div>
      <div className="flex items-center gap-5">
        <Input className="w-24" placeholder="Nota" />
        <Checkbox />
      </div>
    </div>
  );
}
