import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';


function MaioraLogo() {
    return (
        <div className="MaioraLogo">
            <Link to="/home">
                <img src={logo} className="Maiora-logo" alt="logo" />
            </Link>
        </div>
    )
}


const benefitSubMenuItems = [
    {
        id: "sophrology",
        label: "La Sophrologie",
        subMenu: undefined
    },
    {
        id: "relaxation",
        label: "La Relaxation",
        subMenu: undefined
    },
    {
        id: "breathing",
        label: "La Respiration",
        subMenu: undefined
    },
    {
        id: "bachflowers",
        label: "Les Fleurs de Bach",
        subMenu: undefined
    },
    {
        id: "companies",
        label: "Les Ateliers Entreprise",
        subMenu: undefined
    }
];

const menuItems = [
    {
        id: "home",
        route: "/home",
        label: "Accueil",
        subMenu: undefined
    },
    {
        id: "benefit",
        route: "/benefit",
        label: "Prestations",
        subMenu: benefitSubMenuItems
    },
    {
        id: "about",
        route: "/about",
        label: "A propos",
        subMenu: undefined
    },
    {
        id: "contact",
        route: "/contact",
        label: "Contact",
        subMenu: undefined
    },
    {
        id: "meetings",
        route: "/meetings",
        label: "Prendre rendez-vous",
        subMenu: undefined
    }
];

function handleMaioraMenuItemClick(subItems) {
    console.log(subItems);
}

function MaioraMenuItem({item, index}) {
    return (
        <li  className="MaioraMenuListItem"><Link to={item.route}>{item.label}</Link> {item.subMenu ? <div className="MaioraSubMenuBt" onClick={() => handleMaioraMenuItemClick(item.subMenu)}>V</div> : ""}</li>
    )
}

function MaioraMenu() {
    return (
        <div className="MaioraMenu">
            <ul className="MaioraMenuList">
                {menuItems.map((menuItem, index) => (
                    <MaioraMenuItem key={`${menuItem.id}-${ index }`} item={menuItem} index={index} />
                ))}
            </ul>
        </div>
    )
}

function MaioraHeader() {
  return (
    <div className="MaioraHeader">
        <MaioraLogo />
        <MaioraMenu />
    </div>
  );
}



export default MaioraHeader;
