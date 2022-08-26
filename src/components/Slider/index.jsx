import React, { useState } from "react"
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function Slider({ pictures })
{
    console.log(pictures)
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    // const prev = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }
    // const next = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }

    return (
        <div id="carouselExampleControls" class="carousel slide test" data-bs-ride="carousel">

            Slider

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>  
    )
}

export default Slider