import '../styles/Footer.css';
import pivoinePic from '../assets/pivoine_white.svg'
import { Link } from 'react-router-dom';


function MaioraFooter() {
    return (
        <footer className="maiora-footer-container">
            <div className="footer-left-content">
                <div className="footer-main-content-container">
                    <div className="footer-collumn-container">
                        <div className="footer-section-title">INFORMATIONS</div>
                        <ul className="footer-section-content-list">
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">FAQ</Link></li>
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">Mentions légales</Link></li>
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">CGU</Link></li>
                        </ul>
                    </div>
                    <div className="footer-collumn-container">
                        <div className="footer-section-title">MAIORA</div>
                        <ul className="footer-section-content-list">
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">Les prestations</Link></li>
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">Contact</Link></li>
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">À propos</Link></li>
                        </ul>
                    </div> 
                    <div className="footer-collumn-container">
                        <div className="footer-section-title">RÉSEAUX SOCIAUX</div>
                        <ul className="footer-section-content-list">
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">Instagram</Link></li>
                            <li className="footer-section-content-item"><Link className="menu-item-button" to="/home">Facebook</Link></li>
                        </ul>
                    </div>
                </div> 
                <div className="footer-line-separator">
                </div>
                <div className="maiora-copyright-text">
                    Site créé par Matthieu Delpierre, tous droits réservés
                </div>
            </div>
            <div className="footer-right-image">
                <img className="white-pivoine-footer" src={pivoinePic} alt="pivoine_blanche" />
            </div>
        </footer>
    )
}

export default MaioraFooter