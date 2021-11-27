import logo from './logo.svg';
import './Header.css';


function MaioraLogo() {
    return (
        <div className="MaioraLogo">
            <img src={logo} className="Maiora-logo" alt="logo" />
        </div>
    )
}

function MaioraMenu() {
    return (
        <div className="MaioraMenu">
            MEN
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
