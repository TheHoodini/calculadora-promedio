import ghLogo from "@/assets/github.svg"
import repoLogo from "@/assets/repo.svg"

export function Footer() {
    return (
        <footer className="bg-slate-800 text-white font-bold flex flex-col items-center gap-2 mt-10 w-full">
            <h1 className="mt-3">Made by Hoodini</h1>
            <div className="flex items-center gap-4">
                <a href="https://github.com/TheHoodini" target="_blank" rel="noopener noreferrer">
                    <img src={ghLogo} alt="GitHub" className="h-16 mb-3" />
                </a>
                <a href="https://github.com/TheHoodini/calculadora-promedio" target="_blank" rel="noopener noreferrer">
                    <img src={repoLogo} alt="Repository" className="h-12 mb-3" />
                </a>
            </div>
        </footer>
    )
}