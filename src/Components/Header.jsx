import logo from '../assets/logo.png';
const Header = () => {
    return (
        <header className="mb-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200"> {/* Removed card-outline */}
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                </div>
                <div>
                    <h1 className="text-lg font-semibold">Companies Directory – Frontend Development</h1>
                    <div className="text-xs text-gray-500">FRONTLINE EDUTECH ASSESSMENT</div> {/* Replaced text-muted */}
                    <div className="text-xs text-gray-500 mt-2">
                        By: Shaikh Sirajuddin —
                        <a 
                            className="underline" 
                            href="https://www.linkedin.com/in/shaikhsirajuddin/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a> ·
                        <a 
                            className="underline" 
                            href="https://github.com/sirajshaikh-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header