import React, { useState } from "react"
import "./style.scss"

function Slider({ pictures })
{
    console.log(pictures)
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    console.log([current, setCurrent])
    console.log(length)

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div class="carousel my-5" >

            <img src={pictures[current]} alt="" />

            <button class="lightbox_prev" onClick={prev}><span class="fas fa-angle-left"></span></button>
            <button class="lightbox_next" onClick={next}><span class="fas fa-angle-right"></span></button>
        
        </div>  
    )
}

export default Slider