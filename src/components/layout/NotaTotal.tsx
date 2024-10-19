import { Input } from "../ui/input";

export function NotaTotal() {
    return (
        <div className="flex justify-center mt-5">
            <p className="flex items-center">TOTAL</p>
            <Input className="w-24 ml-44" placeholder="Nota" />
        </div>
    )
}