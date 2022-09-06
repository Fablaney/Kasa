import React, { useState } from "react"
import "./style.scss"

function Slider({ pictures })
{
    // j'initialise le tableau avec un index et je commence sur le 0
    const [current, setCurrent] = useState(0)

    // je regarde la longueur du tableau d'images
    const length = pictures.length

    // action des fleches prev et next = je passe d'un index à l'autre
    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // si il n'y à que 1 image = pas de fleches
    if( length === 1)
    {
        return (<div className="carousel my-5" >
                    <img src={pictures[current]} alt=""/>
                </div>
        ) 
    }

    // par défaut si j'ai plusieurs les images
    return (
        <div className="carousel my-5" >

            <img src={pictures[current]} alt=""/>

            <button className="lightbox_prev" onClick={prev}><span className="fas fa-angle-left"></span></button>
            <button className="lightbox_next" onClick={next}><span className="fas fa-angle-right"></span></button>
        
        </div>  
    )
}

export default Slider