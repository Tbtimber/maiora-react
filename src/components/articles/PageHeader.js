import '../../styles/PageHeader.css';

function PageHeaderArticle({imgSrc, titleImg, title, content}) {
    return (
        <article class="maiora-article-page-header">
            <div class="maiora-page-header-left-div">
                <img class="maiora-page-header-img" src={imgSrc} alt="femme_qui_respire" />
            </div>
            <div class="maiora-page-header-right-div">
                <div>
                    <img class="maiora-page-header-title-img" src={titleImg} alt="small_pictogram_defining_title"/>
                    <h1 class="maiora-page-header-title">{ title }</h1>
                </div>
                <p class="maiora-page-header-content">
                    { content }
                </p>
            </div>
        </article>
    )
}

export default PageHeaderArticle