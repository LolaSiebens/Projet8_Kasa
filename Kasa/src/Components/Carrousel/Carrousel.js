import React from 'react';
import arrowLeft from '@/Assets/Images/vector-left.png'
import arrowRight from '@/Assets/Images/vector-right.png'
import { useState } from 'react'


function Carrousel({ pictures, title }) {

    const [index, setIndex] = useState(0);

    const previousImage = () => {
        setIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1)
    }

    const nextImage = () => {
        setIndex((prevIndex) => prevIndex + 1 === pictures.length ? 0 : prevIndex + 1)
    }

    return (
        <div className="slideshow">
            <img className="arrowLeft" src={arrowLeft} alt="flèche gauche" onClick={() => previousImage()} />

            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                {pictures.map((picture, index) => (
                    <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }} alt={title}></div>

                ))}
            </div>

            <img className="arrowRight" src={arrowRight} alt="flèche droite" onClick={() => nextImage()} />

            <span className="paging"> {index + 1} / {pictures.length} </span>
        </div>

    );
};

export default Carrousel;