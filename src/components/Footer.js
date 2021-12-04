import '../styles/Footer.css';
import pivoinePic from '../assets/pivoine_white.svg'
import { Link } from 'react-router-dom';


const footerItems = [ 
    {
        id:"footerInfos",
        label: "INFORMATIONS",
        subContents: [
            {
                id: "footerInfosFaq",
                label: "FAQ",
                link: "/home"
            },
            {
                id: "footerInfosLegal",
                label: "Mentions légales",
                link: "/home"
            },
            {
                id: "footerInfosCgu",
                label: "CGU",
                link: "/home"
            }
        ]   
    },
    {
        id:"footerMaiora",
        label: "MAIORA",
        subContents: [
            {
                id: "footerMaioraPrestations",
                label: "Les prestations",
                link: "/home"
            },
            {
                id: "footerMaioraContact",
                label: "Contact",
                link: "/home"
            },
            {
                id: "footerMaioraAbout",
                label: "À propos",
                link: "/home"
            }
        ]   
    },{
        id:"footerSocials",
        label: "RÉSEAUX SOCIAUX",
        subContents: [
            {
                id: "footerSocialsInstagram",
                label: "Instagram",
                link: "/home"
            },
            {
                id: "footerSocialsFacebook",
                label: "Facebook",
                link: "/home"
            }
        ]   
    }
]

function MaioraFooterCopyright() {
    return (
        <div className="maiora-copyright-text">
            Site créé par Matthieu Delpierre, tous droits réservés
        </div>
    )
}

function MaioraFooterSectionItem({item, index}) {
    return (
        <li className="footer-section-content-item"><Link className="menu-item-button footer-item-link" to={item.link}>{item.label}</Link></li>
    )
}

function MaioraFooterSection({item, index}) {
    return (
        <div className="footer-collumn-container">
            <div className="footer-section-title">{item.label}</div>
            <ul className="footer-section-content-list">
                {item.subContents.map((subItem, index) => (
                    <MaioraFooterSectionItem key={`${subItem.id}-${ index }`} item={subItem} index={index} />
                ))}
            </ul>
        </div>
    )
}

function MaioraFooterContent() {
    return (
        <div className="footer-left-content">
            <div className="footer-main-content-container">
                {footerItems.map((footerItem, index) => (
                    <MaioraFooterSection key={`${footerItem.id}-${ index }`} item={footerItem} index={index} />
                ))}
            </div> 
            <div className="footer-line-separator"></div>
            <MaioraFooterCopyright />
        </div>
    )
}

function MaioraFooter() {
    return (
        <footer className="maiora-footer-container">
            <MaioraFooterContent />
            
            <div className="footer-right-image">
                <img className="white-pivoine-footer" src={pivoinePic} alt="pivoine_blanche" />
            </div>
        </footer>
    )
}

export default MaioraFooter