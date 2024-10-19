import { Input } from "../ui/input";

export function NotaInput() {
    return (
        <div className="flex justify-center mt-5">
            <div className="flex gap-5">
                <p className="flex items-center">NOTA 1</p>
                <Input className="w-24" placeholder="Peso (%)"/>
            </div>
            <Input className="w-24 ml-12" placeholder="Nota"/>
        </div>
    )
}