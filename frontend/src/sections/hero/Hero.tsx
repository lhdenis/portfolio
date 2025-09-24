export default function Hero() {
  return (
    <section

      id="hero"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        background: "linear-gradient(135deg, #000000ff, #000000ff)",
        color: "white",
        marginTop: "300px",
        marginBottom: "400px",
      }}
    >

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Bonjour, je suis <span style={{ fontWeight: "bold" }}>Louis-Hadrien</span>
      </h1>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
        Ingénieur junior en génie logiciel
      </h2>

      <p style={{ maxWidth: "400px", margin: "0 auto 2rem" }}>
        Ingénieur junior en développement logiciel, diplômé de l’ENSEIRB-MATMECA (Bordeaux INP).
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <a 
          href="/CV_français_2025_Louis_Hadrien_DENIS.pdf"
          target="_blank" 
          rel="noopener noreferrer" 
          download={"CV_français_2025_Louis-Hadrien_DENIS.pdf"}
          className="btn-download"
          >
          <button
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              border: "2px solid white",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Télécharger mon CV
          </button>
        </a>
      </div>
    </section>
  );
}
