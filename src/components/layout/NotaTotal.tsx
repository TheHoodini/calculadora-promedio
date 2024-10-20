import { Input } from "../ui/input";

export function NotaTotal() {
    return (
        <div className="w-full flex items-center justify-between mt-5">
            <p className="flex items-center">TOTAL</p>
            <Input className="w-24 mr-9" placeholder="Nota" />
        </div>
    )
}