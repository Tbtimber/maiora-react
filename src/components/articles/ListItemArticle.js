import '../../styles/ListItemArticle.css';
import greenDot from '../../assets/dot_green.svg';

function ListItemArticle({title, items}) {
    return (
        <article className="maiora-article-list">
            <h1 className="maiora-list-title">{ title }</h1>
            <div className="maiora-list-ul">
                {items.map((item, index) => (
                    <div key={`${item.id}-${ index }`} className="maiora-list-il">
                        <img src={greenDot} alt="green_dot" className="maiora-list-il-img"/> <p className='maiora-list-il-text'>{item.text}</p>
                    </div>
                ))}
            </div>
        </article> 
    )
}

export default ListItemArticle