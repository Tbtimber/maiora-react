import '../../styles/HomeWho.css'
import homeWho from '../../assets/home_who.png'


function HomeWho() {
    return (
        <article className="maiora-home-who-article">
            <img className='maiora-home-who-img' src={homeWho} alt='photo_jolie_fille'/>
            <div className='maiora-home-who-content-div'>
                <h1 className='maiora-home-who-title'>De Marie à Maiora</h1>
                <p className='maiora-home-who-content'>Je m’appelle Marie, et je suis la fondatrice de Maiora. Après avoir travaillé 7 ans dans le digital, j’ai <b className='maiora-bold'>décidé de changement complètement de vie</b> et de devenir <b className='maiora-bold maiora-light-green'>Sophrologue et praticienne en relaxation et respiration.</b> <br/><br/><br/><b className='maiora-bold'>Pourquoi ?</b> Je souhaitais profondemment être plus proche d’autrui, et vous accompagner à <b className='maiora-bold'>aller bien, à aller mieux grâce à différents outils.</b> La <b className='maiora-bold maiora-light-green'>sophrologie, la respiration, la relaxation et les fleurs de Bach</b> font partis de la boite à outil que je vous transmets au cours de mes séances. </p>
                <button className='maiora-home-who-button'>En savoir +</button>
            </div>
        </article>
    )
}

export default HomeWho