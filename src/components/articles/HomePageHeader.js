import '../../styles/HomePageHeader.css';
import pageHeaderImg from '../../assets/page_header_home.png';
import breathingPicto from '../../assets/breathing_picto.svg';
import relaxationPicto from '../../assets/relaxation_picto.svg';
import sophroPicto from '../../assets/sophro_picto.svg';

function HomePageHeaderArticle() {
    return (
        <article className="maiora-article-page-header">
            <div className="maiora-page-header-left-div">
                <img className="maiora-page-header-img" src={pageHeaderImg} alt="jolie_paysage" />
            </div>
            <div className="maiora-page-header-right-div">
                <div>
                    <img className="maiora-page-header-title-img" src={sophroPicto} alt="small_pictogram_defining_title"/>
                    <h1 className="maiora-page-header-title">SOPHROLOGIE</h1>
                </div>
                <div>
                    <img className="maiora-page-header-title-img" src={relaxationPicto} alt="small_pictogram_defining_title"/>
                    <h1 className="maiora-page-header-title">RELAXATION</h1>
                </div>
                <div>
                    <img className="maiora-page-header-title-img" src={breathingPicto} alt="small_pictogram_defining_title"/>
                    <h1 className="maiora-page-header-title">RESPIRATION</h1>
                </div>
                <div className='maiora-horizontal-sep'></div>
                <p className="maiora-page-header-content">
                    <b className='maiora-bold'>Ad Maiora</b>, vers une vie <b className='maiora-bold'>plus belle, plus sereine</b>. <br/><br/>Maiora accompagne ses clients à aller bien, à aller mieux grâce à la sophrologie, la relaxation, la respiration et les fleurs de Bach. 
                </p>
            </div>
        </article>
    )
}

export default HomePageHeaderArticle