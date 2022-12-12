const Card = (quote) => {    
    return (
        <div className="card">
            <div className="content">" { quote.props.content } "</div>
            <div className="author">-{ quote.props.author }</div>
        </div>
    );
}
 
export default Card;