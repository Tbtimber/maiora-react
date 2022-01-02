import '../../styles/HomePrestations.css'
import triPicto from '../../assets/tri_picto.svg'
import triPictoWhite from '../../assets/tri_picto_white.svg'
import sophroPicto from '../../assets/sophro_picto_white.svg'
import relaxPicto from '../../assets/relaxation_picto_white.svg'
import breathPicto from '../../assets/breathing_picto_white.svg'
import bachPicto from '../../assets/bach_picto_white.svg'

function HomePrestations() {
    return(
        <article className="home-prestation-article">
            <div className='home-value-title-section'>
                <img className='maiora-home-values-img' src={triPicto} alt='trigramm_symbolisant'/>
                <h1 className='maiora-home-values-title'>LES PRESTATIONS</h1>
            </div>
            <div className='home-prest-grid'>
                <div className='home-prest-card'>
                    <img className='home-prest-card-picto' src={sophroPicto} alt='symbol'/>
                    <h1 className='home-prest-card-title'>LA SOPHROLOGIE</h1>                    
                    <p className='home-prest-card-content'>La sophrologie permet de mieux gérer ses angoisses, le stress et permet d’évacuer les tensions physiques et mentales grâce à des exercices de respiration, de visualisation et du mouvement. </p>
                </div>
                <div className='home-prest-card'>
                    <img className='home-prest-card-picto' src={relaxPicto} alt='symbol'/>
                    <h1 className='home-prest-card-title'>LA RELAXATION</h1>                    
                    <p className='home-prest-card-content'>Si vous cherchez à vous détendre et à vous sentir mieux, sans résoudre quelconque problématique, alors la relaxation est faite pour vous. La relaxation permet de dénouer des tensions aussi bien physiques que mentales.</p>
                </div>
                <div className='home-prest-card'>
                    <img className='home-prest-card-picto' src={breathPicto} alt='symbol'/>
                    <h1 className='home-prest-card-title'>LA BOX RESPIRATION</h1>                    
                    <p className='home-prest-card-content'>Dans la Box Respiration, vous retrouverez des vidéos qui vous expliqueront les principes de la respiration, et divers exercices pour apprendre à mieux respirer, vous calmer ou dynamiser.</p>
                </div>
                <div className='home-prest-card'>
                    <img className='home-prest-card-picto' src={bachPicto} alt='symbol'/>
                    <h1 className='home-prest-card-title'>LES FLEURS DE BACH</h1>                    
                    <p className='home-prest-card-content'>Ad maiora admaiorafdjnzei admarioa.maiora admaiorafdjnzei admarioa. maiora admaiorafdjnzei admarioa</p>
                </div>
                <div className='home-prest-card'>
                    <img className='home-prest-card-picto' src={triPictoWhite} alt='symbol'/>
                    <h1 className='home-prest-card-title'>LES ATELIERS ENTREPRISE</h1>                    
                    <p className='home-prest-card-content'>Nous remarquons que le stress au travail est de plus en plus fréquent. Je suis persuadée qu’en prenant soin des collaborateurs, nous pouvons faire en sorte de rendre leur travail plus agréable au quotidien.</p>
                </div>
            </div>
        </article>
    )
}

export default HomePrestations