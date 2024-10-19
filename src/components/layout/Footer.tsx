import ghLogo from "@/assets/github.svg"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white font-bold flex flex-col items-center gap-1 mt-10">
            <h1 className="mt-3">Made by Hoodini</h1>
            <a href="https://github.com/TheHoodini" target="_blank" rel="noopener noreferrer">
                <img src={ghLogo} alt="GitHub" className="h-16 mb-3" />
            </a>
        </footer>
    )
}