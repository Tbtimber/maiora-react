import { Link } from 'react-router-dom';
import logo from '../assets/maiore-main-logo.svg';
import cursor_down from '../assets/cursor_down.svg'
import '../styles/Header.css';

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
        label: "ACCUEIL",
        subMenu: undefined
    },
    {
        id: "benefit",
        route: "/benefit",
        label: "PRESTATIONS",
        subMenu: benefitSubMenuItems
    },
    {
        id: "about",
        route: "/about",
        label: "A PROPOS",
        subMenu: undefined
    },
    {
        id: "contact",
        route: "/contact",
        label: "CONTACT",
        subMenu: undefined
    },
    {
        id: "meetings",
        route: "/meetings",
        label: "PRENDRE RDV",
        subMenu: undefined
    }
];

var currentlyOpenedSubMenu = []

function toggleSubMenu(menuItem) {
    if(currentlyOpenedSubMenu.includes(menuItem.id+"subMenu")) {
        currentlyOpenedSubMenu.forEach(element => {
            document.getElementById(element).classList.remove("open")
        });    
        currentlyOpenedSubMenu = []
    } else {
        currentlyOpenedSubMenu.forEach(element => {
            document.getElementById(element).classList.remove("open")
        });
        document.getElementById(menuItem.id+"subMenu").classList.add("open")
        currentlyOpenedSubMenu.push(menuItem.id+"subMenu")
    }
}

function MaioraMenuItem({item, index}) {
    return (
        <div className="menu-item-container" onClick={() => toggleSubMenu(item)}>
            <Link className="menu-item-button" to={item.route}>
                {item.label}
            </Link> 
            {item.subMenu ? <img className="cursor_down" src={cursor_down} alt="cursor_down"/>:""}
            {item.subMenu ? <MaioraSubMenu items={item.subMenu} id={item.id} />:""}
        </div>
    )
}

function MaioraSubMenu({items, id}) {
    return (
        <div id={id + "subMenu"} className="sub-menu-container">
            {items.map((item, index) => (
                <div key={`${item.id}-${ index }`} className="sub-menu-item-container">{item.label}</div>    
            ))}
        </div>
    )
}

function MaioraMenu() {
    return (
        <div className="maiora-menu-container">
            {menuItems.map((menuItem, index) => (
                <MaioraMenuItem key={`${menuItem.id}-${ index }`} item={menuItem} index={index} />
            ))}
        </div>
    )
}

function MaioraHeader() {
  return (
    <nav className="main-nav-menu">
        <img src={logo} alt="Logo Maiora" />
        <MaioraMenu />
    </nav>
  );
}


export default MaioraHeader;
