import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../../components/Slider";
import HouseSingle from "../../components/HouseSingle";
import Accordion from "../../components/Accordion";

// datas
import Data from "../../datas/logements.json"

function Fiche_logement()
{
    const { id } = useParams()

    const house = Data.find((item) => item.id === id)
    console.log(house)

    if (!house)
    {
        return <Navigate to='/Error'/>
    } 
  
    return (
        <div className="container my-5">

            <Slider pictures={house.pictures}></Slider>

            <HouseSingle className="mb-4"></HouseSingle>

            <div className='house-accordion row test gap-0'>

                {/* accordeon description */}
                <Accordion title='Description' nomero="1">{house.description}</Accordion>

                {/* accordeon equippement */}
                <Accordion title='Equipements' nomero="2">
                    {house.equipments.map((item) => (
                        <ul>
                            <li key={item}>{item}</li>
                        </ul>
                    ))}
                </Accordion>

            </div>
        </div>
    )
}

export default Fiche_logement