import '../../styles/OfferGridArticle.css';

function OfferGridArticle({title, cards, subtext}) {
    return (        
        <article className="maiora-article-offer">
            <h1 className="maiora-offer-title">{ title }</h1>
            <div className="maiora-offer-grid-container">
                {cards.map((card, index) => (
                    <div key={`${card.id}-${ index }`} className="maiora-offer-card-div">
                        <div className="maiora-offer-card-subdiv">
                            <h1 className="maiora-offer-card-title">{card.title}</h1>
                            <h2 className="maiora-offer-card-price">{card.price}</h2>
                            <p className="maiora-offer-card-subprice">{card.subprice}</p>
                            <p className="maiora-offer-card-content">{card.content}</p>
                            <button className="maiora-offer-card-button">{card.button}</button>
                        </div>
                    </div>    
                ))}
            </div>
            <p className="maiora-offer-subtext-p">{ subtext }</p>
        </article>
    )
}

export default OfferGridArticle