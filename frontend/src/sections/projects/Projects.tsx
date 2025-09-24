export default function Projets() {
    return (
        <>
            <h1 style={{ fontSize: "2rem", marginBottom: "2rem", marginLeft: "420px" }}>
                Certains de mes projets
            </h1>
            <section
                id="projects"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))", 
                    gap: "1rem",
                    background: "linear-gradient(135deg, #000000ff, #000000ff)",
                    color: "white",   
                    padding: "1rem",
                    textAlign: "center",
                    marginBottom: "400px",
                    marginLeft: "400px",
                    marginRight: "400px",
                }}
            >


                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "1rem",
                        border: "1px solid white",
                        padding: "1rem",           
                        borderRadius: "8px",        
                    }}
                >
                    <a href="#projects">Projet 1</a>
                    <a href="/CV_LouisHadrien.pdf" target="_blank" rel="noopener noreferrer">
                        Vzopk alrem dioqns furetm xaliven drostum keval trinoq berumis calphir yondest ravelik fomundr sepital vorent maxilu drasen typor lavenqu idrast folumix denarat qepolis ventra.

                    </a>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "1rem",
                        border: "1px solid white", // largeur, style, couleur
                        padding: "1rem",           // optionnel, pour aérer
                        borderRadius: "8px",        // optionnel, coins arrondis
                    }}
                >
                    <a href="#projects">Projet 2</a>
                    <a href="/CV_LouisHadrien.pdf" target="_blank" rel="noopener noreferrer">
                        Vzopk alrem dioqns furetm xaliven drostum keval trinoq berumis calphir yondest ravelik fomundr sepital vorent maxilu drasen typor lavenqu idrast folumix denarat qepolis ventra.

                    </a>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "1rem",
                        border: "1px solid white", // largeur, style, couleur
                        padding: "1rem",           // optionnel, pour aérer
                        borderRadius: "8px",        // optionnel, coins arrondis
                    }}
                >
                    <a href="#projects">Projet 3</a>
                    <a href="/CV_LouisHadrien.pdf" target="_blank" rel="noopener noreferrer">
                        Vzopk alrem dioqns furetm xaliven drostum keval trinoq berumis calphir yondest ravelik fomundr sepital vorent maxilu drasen typor lavenqu idrast folumix denarat qepolis ventra.

                    </a>
                </div>


                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "1rem",
                        border: "1px solid white", // largeur, style, couleur
                        padding: "1rem",           // optionnel, pour aérer
                        borderRadius: "8px",        // optionnel, coins arrondis
                    }}
                >
                    <a href="#projects">Projet 4</a>
                    <a href="/CV_LouisHadrien.pdf" target="_blank" rel="noopener noreferrer">
                        Vzopk alrem dioqns furetm xaliven drostum keval trinoq berumis calphir yondest ravelik fomundr sepital vorent maxilu drasen typor lavenqu idrast folumix denarat qepolis ventra.

                    </a>
                </div>


                <div
                    style={{

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "1rem",
                        border: "1px solid white", // largeur, style, couleur
                        padding: "1rem",           // optionnel, pour aérer
                        borderRadius: "8px"        // optionnel, coins arrondis
                    }}
                >
                    <a href="#projects">Projet 5</a>
                    <a href="/CV_LouisHadrien.pdf" target="_blank" rel="noopener noreferrer">
                        Vzopk alrem dioqns furetm xaliven drostum keval trinoq berumis calphir yondest ravelik fomundr sepital vorent maxilu drasen typor lavenqu idrast folumix denarat qepolis ventra.

                    </a>
                </div>

            </section>
        </>
    );
}
