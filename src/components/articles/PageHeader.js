import '../../styles/PageHeader.css';

function PageHeaderArticle({imgSrc, titleImg, title, content}) {
    return (
        <article className="maiora-article-page-header">
            <div className="maiora-page-header-left-div">
                <img className="maiora-page-header-img" src={imgSrc} alt="femme_qui_respire" />
            </div>
            <div className="maiora-page-header-right-div">
                <div>
                    <img className="maiora-page-header-title-img" src={titleImg} alt="small_pictogram_defining_title"/>
                    <h1 className="maiora-page-header-title">{ title }</h1>
                </div>
                <p className="maiora-page-header-content">
                    { content }
                </p>
            </div>
        </article>
    )
}

export default PageHeaderArticle