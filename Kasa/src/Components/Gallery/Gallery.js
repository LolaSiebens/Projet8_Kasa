import React from "react";
import Card from "@/Components/Card/Card.js"

import cardList from "@/Assets/Mock/Logement.json"
import { Link } from "react-router-dom"


const Gallery = () => {

    return (
        <div>
            <ul className="gallery">
                {cardList.map(({ id, title, cover }) => {
                    const Logement = "/Logement/" + id
                    return (
                        <li key={id} >
                            <Link to={Logement}>
                                <Card title={title} cover={cover} />
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Gallery; 
