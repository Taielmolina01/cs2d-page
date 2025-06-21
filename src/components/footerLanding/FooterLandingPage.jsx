import MemberItem from "../memberItem";

function FooterLandingPage() {
    const members = {
        "Fernandez, Facundo": "https://github.com/fernandezfacu",
        "Molina, Taiel": "https://github.com/Taielmolina01",
        "Rebollo, Matías Gabriel": "https://github.com/matiasrebollo",
        "Rocha Díaz, Tomás": "https://github.com/Trocha4"
    }
    
    const linkRepo = "https://github.com/Taielmolina01/cs-2d-grupo-5-2025c1";
    const linkOriginalGame = "https://cs2d.com/";

    return (
        <footer className="footer-landing">
            <div className="about-us">
                <h2>
                    Sobre nosotros
                </h2>
                <div>
                    <p>
                        Este fue nuestro trabajo práctico grupal para la materia de Taller de Programación I catedra Veiga de la Facultad de Ingeniería de la UBA
                    </p>
                    <h3>
                        Integrantes
                    </h3>
                    <ul>
                        {Object.keys(members).map((memberName) => (
                            <MemberItem 
                            key={memberName}
                            name={memberName} 
                            link={members[memberName]} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="help">
                <h2>
                    Acerca del proyecto
                </h2>
                <div>
                    <a 
                        href={linkRepo}
                        className="footer-link"
                        target="_blank"
                    >
                        Código
                    </a>
                                        <a 
                        href={linkOriginalGame}
                        className="footer-link"
                        target="_blank"
                    >
                        Juego original
                    </a>
                </div>
            </div>
        </footer>    
    ) 
}

export default FooterLandingPage;