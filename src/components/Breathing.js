import '../styles/Breathing.css';
import pageHeaderImg from '../assets/page_header_breathing.png';
import pageHeaderTitleImg from '../assets/breathing_picto.svg';
import PageHeaderArticle from "./articles/PageHeader"
import QAndAArticle from "./articles/QAndAArticle"
import ListItemArticle from "./articles/ListItemArticle"
import OfferGridArticle from './articles/OfferGridArticle';

function MaioraBreathing() {
    return (
        <div className="maiora-breathin-content-div">
            <PageHeaderArticle  imgSrc={pageHeaderImg} 
                                title={breathingData.pageHeader.title} 
                                content={breathingData.pageHeader.content} 
                                titleImg={pageHeaderTitleImg}
                                />
            
            <QAndAArticle   question={breathingData.qa1.question} 
                            answer={breathingData.qa1.answer}  
                            buttonLabel={breathingData.qa1.buttonLabel} 
                            displayBt={breathingData.qa1.displayBt} 
                            />

            <ListItemArticle    title={breathingData.listItem.title}
                                items={breathingData.listItem.items} 
                                />
            
            <QAndAArticle   question={breathingData.qa2.question} 
                            answer={breathingData.qa2.answer}  
                            buttonLabel={breathingData.qa2.buttonLabel} 
                            displayBt={breathingData.qa2.displayBt} 
                            />

            <OfferGridArticle   title={breathingData.gridOffer.title}
                                cards={breathingData.gridOffer.cards}
                                subtext={breathingData.gridOffer.subtext}
                                />
        </div>
    )
}


const breathingData = {
    "pageHeader": {
        "title":"RESPIRATION",
        "content":"S’il y a bien une chose qui nous relie à la vie à n’importe quel moment, c’est notre respiration. Grâce à elle, nous profitons de chaque instant. Cependant, à cause des tracas et du stress, notre respiration s’est modifiée au fur et à mesure des années. Notre ventre ne se gonfle plus comme cette fameuse image du nourisson qui dort. Je vous propose de retrouver cette respiration, cette respiration naturelle qui nous permet d’être plus serein au quotidien."
    },
    "qa1": {
        "question": "Pour cela, je vous propose une Box Respiration ! ",
        "answer": "La Box Respiration est votre nouvel allier au quotidien. Dans cette Box, vous retrouverez des vidéos qui vous expliqueront les principes de la respiration, et divers exercices pour apprendre à mieux respirer, pour vous calmer ou vous dynamiser grâce à la respiration. ",
        "buttonLabel": "",
        "displayBt": false
    },
    "listItem":{
        "title": "Le contenu détaillé de la Box Respiration",
        "items": [
            {
                "id":1,
                "text":"Le principe physiologique de la respiration "
            },
            {
                "id":2,
                "text":"A la découverte de votre respiration"
            },
            {
                "id":3,
                "text":"A la découverte de votre rythme respiratoire"
            },
            {
                "id":4,
                "text":"La respiration abdominale"
            },
            {
                "id":5,
                "text":"La respiration calmante "
            },
            {
                "id":6,
                "text":"La respiration dynamisante"
            },
            {
                "id":7,
                "text":"La respiration purifiante"
            },
            {
                "id":8,
                "text":"La respiration au carré"
            },
            {
                "id":9,
                "text":"La respiration pour s’endormir"
            },
            {
                "id":10,
                "text":"Méditation sur le souffle"
            },
            
        ]
    },
    "qa2": {
        "question": "Comment ça marche ?",
        "answer": "Dès lors de que je reçois votre inscription, vous receverez un lien contenant les 10 vidéos de la Box Respiration. Vous pouvez vous inscrire en cliquant sur Je m’inscris.",
        "buttonLabel": "Je m'inscris",
        "displayBt": true
    },
    "gridOffer": {
        "title": "Les formules contenant la Box Respiration: ",
        "subtext": "Le paiement se fait par chèque, ou en espèces si vous la séance se déroule au cabinet. Il peut également se faire via Paypal, Pumpkin ou Lydia.",
        "cards": [
            {
                "id":1,
                "title": "La Box respiration",
                "price": "60€",
                "subprice": "Non",
                "content": "Le lien contenant les vidéos vous sera envoyé dès le paiement reçu. ",
                "button": "J'en profite"
            },
            {
                "id":2,
                "title": "Séance de sophrologie & la Box respiration",
                "price": "90€",
                "subprice": "30€ d’économie",
                "content": "Le lien contenant les vidéos vous sera envoyé dès le paiement reçu. ",
                "button": "J'en profite"
            },
            {
                "id":3,
                "title": "3 séances de sophrologie & la Box Respiration",
                "price": "190€",
                "subprice": "50€ d’économie",
                "content": "Le lien contenant les vidéos vous sera envoyé dès le paiement reçu. ",
                "button": "J'en profite"
            },
            {
                "id":4,
                "title": "3 séances de relaxation  + la Box respiration",
                "price": "160€",
                "subprice": "50€ d’économie",
                "content": "Le lien contenant les vidéos vous sera envoyé dès le paiement reçu. ",
                "button": "J'en profite"
            }
        ]
    }
}

export default MaioraBreathing