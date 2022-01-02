import '../../styles/HomeValuesArticle.css'
import pivoineImg from '../../assets/pivoine.svg'

function HomeValuesArticle() {
    return (
        <article className="maiora-home-values-article">
            <div className='home-value-title-section'>
                <img className='maiora-home-values-img' src={pivoineImg} alt='pivoine_minimaliste'/>
                <h1 className='maiora-home-values-title'>LES VALEURS DE MAIORA</h1>
            </div>
            <div className='home-values-content-flex'>
                <div className='home-values-card-div'>
                    <div className='home-values-vert-sep'></div>
                    <div>
                        <h1 className='home-values-card-title'># BIENVEILLANCE</h1>
                        <p className='home-valus-card-content'>Je suis une personne très bienveillante et empathique. Vous serez ainsi accueuilli en toute bienveillance chez Maiora.</p>
                    </div>
                </div>
                <div className='home-values-card-div'>
                    <div className='home-values-vert-sep'></div> 
                    <div>
                        <h1 className='home-values-card-title'># CONFIANCE</h1>
                        <p className='home-valus-card-content'>Chez Maiora, la confiance est clé lors d’un accompagnement tel qu’il soit.</p>
                    </div>
                </div>
                <div className='home-values-card-div'>
                    <div className='home-values-vert-sep'></div>
                    <div>
                        <h1 className='home-values-card-title'># POSITIVITÉ</h1>
                        <p className='home-valus-card-content'>Voir le bon côté des choses est plus qu’un allier pour se sentir bien au quotidien. Chez Maiora, la positivité est essentielle.</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default HomeValuesArticle