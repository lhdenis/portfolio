import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="app-footer" id="contact">
            <div className="footer-inner">
                <div className="footer-brand">
                    <p className="footer-tagline">Crafted with React • {year}</p>
                </div>

                <nav className="footer-links" aria-label="Liens de pied de page">
                    <a href="https://github.com/lhdenis" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/ton-user" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>

                <div className="footer-meta">
                    <small>© {year} — Tous droits réservés.</small>
                </div>
            </div>
        </footer>
    );
}
