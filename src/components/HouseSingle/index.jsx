import React from "react"
import { useParams } from "react-router-dom"
import Tag from "../Tag"
import "./style.scss"

// datas
import Data from "../../datas/logements.json"

function HouseSingle()
{
    const { id } = useParams()

    const house = Data.find((item) => item.id === id)

    return (
        <div className='house-infos-container row'>

            {/* section 1 gauche */}
            <div className='house-infos col-md-8 mb-4'>

                {/* titre */}
                <h2 className='house-title'>{house.title}</h2>

                {/* localisation */}
                <span className='house-location mb-4'>{house.location}</span>

                {/* tages */}
                <Tag house={house}></Tag>

            </div>

            {/* section 2 droit */}
            <div className='house-hote col-md-4'>

                {/* nom et photo */}
                <div className='host-infos'>

                    <div className='name'>{house.host.name.replace(" ", "\n")}</div>

                    <img className='hote-image' alt='house' src={house.host.picture} />

                </div>

                {/* div étoiles */}
                <div className='stars d-flex justify-content-end'>
                    <i className="fas fa-star stars"></i>
                    <i className="fas fa-star stars"></i>
                    <i className="fas fa-star stars"></i>
                    <i className="fas fa-star stars"></i>
                    <i className="fas fa-star stars"></i>
                </div>
                
            </div>
        </div>
    )
}

export default HouseSingle