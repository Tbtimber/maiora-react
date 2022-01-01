import '../../styles/QAndAArticle.css';

function QAndAArticle({question, answer, buttonLabel, displayBt}) {
    return (
        <article className="maiora-article-qa">
            <h1 className="maiora-qa-question">{ question }</h1>
            <p className="maiora-qa-answer">{ answer }</p>
            { displayBt && 
                <button className="maiora-qa-button">{ buttonLabel }</button>
            }   
        </article>
    )
}

export default QAndAArticle