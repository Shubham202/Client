import Card from '../components/Card';

const Quote = (quotes) => {

    return (
        <div className="container">
            <div className="cards">
                { quotes.props.map((quote, pos) => <Card props={ quote } key={ pos } />) }
            </div>
        </div>
    );
}
 
export default Quote;