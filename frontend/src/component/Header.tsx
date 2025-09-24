import "./Header.css";

const HEADER_OFFSET = 300; 

function smoothScrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
}

export default function Header() {
    return (
        <header className="app-header">
            <nav className="container">


                <div className="brand">Mon Header</div>

                <div className="onglets">
                    <a href="#hero" onClick={(e) => { e.preventDefault(); smoothScrollTo("hero"); }}>Home</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScrollTo("projects"); }}>Projects</a>
                    <a href="#timeline" onClick={(e) => { e.preventDefault(); smoothScrollTo("timeline"); }}>Timeline</a>
                </div>
            </nav>
        </header>
    );
}
