import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../../components/Slider";
import HouseSingle from "../../components/HouseSingle";
// import Accordion from "../components/Accordion/Accordion";

// datas
import Data from "../../datas/logements.json"

function Fiche_logement()
{
    const { id } = useParams()

    const house = Data.find((item) => item.id === id)
    console.log(house)

    if (!house)
    {
        return <Navigate to='/404'/>
    } 
  
    return (
        <div className="container my-5">

            <Slider pictures={house.pictures}></Slider>

            <HouseSingle></HouseSingle>

            <div className='accordion-container'>
                {/* <Accordion title='Description'>{house.description}</Accordion> */}
                {/* <Accordion title='Equipements'> */}
                    {house.equipments.map((item) => (
                        <div key={item}>{item}</div>
                    ))}
                {/* </Accordion> */}
            </div>
        </div>
    )
}

export default Fiche_logement