import { Input } from "@/components/ui/input";

interface NotaInputProps {
  numeroNota: number;
}

export function NotaInput({ numeroNota }: NotaInputProps) {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex gap-5">
        <p className="flex items-center">Nota {numeroNota}</p>
        <Input className="w-24" placeholder="Peso (%)" />
      </div>
      <Input className="w-24 ml-12" placeholder="Nota" />
    </div>
  );
}
