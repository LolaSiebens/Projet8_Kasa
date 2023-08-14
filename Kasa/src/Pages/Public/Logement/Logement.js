import { useParams } from 'react-router-dom'

import cardList from '@/Assets/Mock/Logement.json'
import Collapse from '@/Components/Collapse/Collapse'
import Carrousel from '@/Components/Carrousel/Carrousel'
import Summary from '@/Components/Summary/Summary'
import ErrorComponent from '@/Pages/Public/Error/Error'

function Logement() {
    const { id } = useParams()

    const card = cardList.find((elem) => elem.id === id)

    return card ? (
        <section className="Logement">
            <Carrousel pictures={card.pictures} title={card.title} />
            <Summary card={card} />
            <div className="collapses">
                <Collapse title="Description" text={card.description} />
                <Collapse
                    title="Equipements"
                    text={card.equipments.map((elem, idx) => (
                        <li key={idx}>{elem}</li>
                    ))}
                />
            </div>
        </section>
    ) : (<ErrorComponent />)


}

export default Logement; 