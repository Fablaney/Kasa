import React, { useState } from "react"
import "./style.scss"

function Slider({ pictures })
{
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div className="carousel my-5" >

            <img src={pictures[current]} alt=""/>

            <button className="lightbox_prev" onClick={prev}><span className="fas fa-angle-left"></span></button>
            <button className="lightbox_next" onClick={next}><span className="fas fa-angle-right"></span></button>
        
        </div>  
    )
}

export default Slider