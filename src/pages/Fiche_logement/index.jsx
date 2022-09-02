import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../../components/Slider";
import HouseSingle from "../../components/HouseSingle";
import Accordeon from "../../components/Accordeon";

import "./style.scss"

// datas
import Data from "../../datas/logements.json"

function Fiche_logement()
{
    const { id } = useParams()

    const house = Data.find((item) => item.id === id)

    if (!house)
    {
        return <Navigate to='/Error'/>
    }

    return (
        <div className="container padding-sm-5">

            <Slider pictures={house.pictures}></Slider>

            <HouseSingle></HouseSingle>

            <div className='house-accordion row py-5'>

                {/* accordeon description */}
                <Accordeon title='Description' numero="1">{house.description}</Accordeon>

                {/* accordeon equippement */}
                <Accordeon title='Equipements' numero="2">
                    
                    {house.equipments.map((item) => (
                        <p key={item}>{item}</p>
                    ))}

                </Accordeon>

            </div>
        </div>
    )
}

export default Fiche_logement