import { Input } from "../ui/input";

interface NotaTotalProps {
    notaTotal: string;
  }
  
  export function NotaTotal({ notaTotal }: NotaTotalProps) {
    return (
      <div className="w-full flex items-center justify-between mt-5">
        <p className="flex items-center">TOTAL</p>
        <Input className="w-24 mr-9 text-base" placeholder="Nota" value={notaTotal} />
      </div>
    );
  }
  