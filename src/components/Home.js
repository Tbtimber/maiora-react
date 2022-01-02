import HomePageHeaderArticle from "./articles/HomePageHeader"
import HomeWho from "./articles/HomeWho"
import HomeValuesArticle from "./articles/HomeValues"
import HomePrestations from "./articles/HomePrestations"

function MaioraHome() {
    return (
        <div className="maiora-home-content-div">
            <HomePageHeaderArticle />
            <HomeWho />
            <HomeValuesArticle />
            <HomePrestations />
        </div>
    )
}

export default MaioraHome