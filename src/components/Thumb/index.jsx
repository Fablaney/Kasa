import { Link } from 'react-router-dom'
import styled from 'styled-components'

// datas
import Data from "../../datas/logements.json";

const ThumbCard = styled.div
`
    background: #F7F7F7;
    border-radius: 25px;
    padding: 56px;
    margin-bottom: 43px;

    @media (max-width: 768px)
    {
        
    }
`
const StyledLink = styled(Link)
`
    border-radius: 25px;
    position: relative;
    border: 1px solid red;
`
const Img = styled.img
`
    width: 100%;
    object-fit: cover;
` 
const Ombre = styled.div
`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
`
const Titre = styled.h3
`
    position: absolute;
    left: 5%;
    bottom: 5%;
    font-size: 18px;
    line-height: 26px;
    color: white;
`


function Thumbs()
{
    return (
        <ThumbCard className='container'>
            <div className="row">
            
                {Data.map((item) => {
                    return (
                        <div className="col-md-4 mb-4">
                            <StyledLink to={`/Fiche_logement/${item.id}`} key={item.id}>

                                <Img className='test' src={item.cover} alt={item.title}></Img>

                                <Ombre className='test'></Ombre>
                                
                                <Titre className='test'>{item.title}</Titre>

                            </StyledLink>
                        </div>
                    )
                })}

            </div>
        </ThumbCard>
    )
}
    
export default Thumbs