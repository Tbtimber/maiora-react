import '../../styles/QAndAArticle.css';

function QAndAArticle({question, answer, buttonLabel, displayBt}) {
    return (
        <article class="maiora-article-qa">
            <h1 class="maiora-qa-question">{ question }</h1>
            <p class="maiora-qa-answer">{ answer }</p>
            { displayBt && 
                <button class="maiora-qa-button">{ buttonLabel }</button>
            }   
        </article>
    )
}

export default QAndAArticle