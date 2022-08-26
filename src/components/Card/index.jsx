import { Link } from 'react-router-dom'
import "./style.scss"

function Card(props)
{
    return (
        <div className="col-lg-4 col-md-6 mb-4">

            <Link className='d-block lien-card' to={`/Fiche_logement/${props.house.id}`} key={props.house.id}>

                <img className='img-card' src={props.house.cover} alt={props.house.title} />

                <h3 className='titre-card'>{props.house.title}</h3>
                
            </Link>

        </div>  
    )
}

export default Card