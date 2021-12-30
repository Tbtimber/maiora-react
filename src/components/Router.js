import { Route, Routes } from "react-router"
import MaioraAbout from "./About"
import MaioraBenefit from "./Benefit"
import MaioraBreathing from "./Breathing"
import MaioraContact from "./Contact"
import MaioraHome from "./Home"
import MaioraMeetings from "./Meetings"

function MaioraRouter() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MaioraHome />} />
                <Route path="/home" element={<MaioraBreathing />} />
                <Route path="/benefit" element={<MaioraBenefit />} />
                <Route path="/about" element={<MaioraAbout />} />
                <Route path="/contact" element={<MaioraContact />} />
                <Route path="/meetings" element={<MaioraMeetings />} />
                <Route path="/breathing" element={<MaioraBreathing />}/>
            </Routes>
        </div> 
    )
}

export default MaioraRouter