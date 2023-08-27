
import Tags from '@/Components/Tags/Tags'
import Rating from '@/Components/Rating/Rating'

function Summary({ card }) {



    return (
        <div className="summary">
            <div>
                <h1>{card.title}</h1>
                <p>{card.location}</p>
                <Tags card={card} />
            </div>
            <div className="responsive">
                <div className="host">
                    <p>{card.host.name}</p>
                    <img src={card.host.picture} alt={card.host.name} />
                </div>
                <Rating rating={card.rating} />
            </div>
        </div>
    )
}

export default Summary
