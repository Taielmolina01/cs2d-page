import './firstSectionLanding.css'
import { Link } from 'react-router-dom';

function FirstSectionLanding() {
    const repo = "https://github.com/Taielmolina01/cs-2d-grupo-5-2025c1"
    return (
        <section className='not-signed-background container-first-section'>
            <div className="subcontainer-first-section">
                <p className="animated-title">
                    El Counter Strike está más vivo que nunca!
                </p>
                <div className="text-body">
                    <p>Decile al nabo de tu amigo que dice que no juega más CS que prenda la PC ya!</p>
                    <p>Demostrá la paternidad una vez más, no quedes como un pichi</p>
                    <p>Descargatelo y contanos que te pareció!</p>
                </div>
                <a 
                    href={repo}
                    className="link-landing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <button className="download button-landing">
                        Descargar
                    </button>
                    </a>
            </div>
        </section>
    )
}

export default FirstSectionLanding