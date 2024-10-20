import { Button } from "@/components/ui/button";

interface BotonesNotasProps {
  agregarNota: () => void;
  removerUltimaNota: () => void;
  hayMasDeUnaNota: boolean;
}

export function BotonesNota({ agregarNota, removerUltimaNota, hayMasDeUnaNota }: BotonesNotasProps) {
  return (
    <div className={`flex w-full mt-10  ${hayMasDeUnaNota ? 'justify-between' : ''}`}>
      <Button
        className={`bg-blue-500 hover:bg-blue-500 lg:hover:bg-blue-400 ${hayMasDeUnaNota ? 'w-[48%]' : 'w-full'}`}
        onClick={agregarNota}>
        + Añadir nota
      </Button>

      {hayMasDeUnaNota && (
        <Button className=" bg-red-600 hover:bg-red-600 lg:hover:bg-red-500 w-[48%]" onClick={removerUltimaNota}>
          - Eliminar nota
        </Button>
      )}
    </div>
  );
}
