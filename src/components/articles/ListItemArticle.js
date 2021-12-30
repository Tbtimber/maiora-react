import '../../styles/ListItemArticle.css';

function ListItemArticle({title, items}) {
    return (
        <article class="maiora-article-list">
            <h1 class="maiora-list-title">{ title }</h1>
            <ul class="maiora-list-ul">
                {items.map((item, index) => (
                    <li key={`${item.id}-${ index }`} class="maiora-list-il">
                        {item.text}
                    </li>
                ))}
            </ul>
        </article> 
    )
}

export default ListItemArticle