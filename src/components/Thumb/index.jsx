import { Link } from 'react-router-dom'
import styled from 'styled-components'

// datas
import Data from "../../datas/logements.json";

const ThumbCard = styled.div

const StyledLink = styled(Link)
`
    position: relative;
    

    @media (max-width: 768px)
    {
        padding: 20px 0 20px 0;
    }
`
const Img = styled.div
`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #FF6060;
    border-radius: 10px;
`
const Rectangle = styled.div
`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 10px;
`
// const StyledLink = styled(Link)
`
    position: absolute;
    left: 5.88%;
    right: 5.88%;
    top: 78.82%;
    bottom: 5.88%;

    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    display: flex;
    align-items: flex-end;

    color: white;

    &:hover
    {
        color: white;
    }

    @media (max-width: 768px)
    {
        font-size: 12px;
        padding: 0 10px;
    }
`



function Thumb()
{
    return (
        <ThumbCard className='col-md-4'>

            {Data.map((item) => {
                        return (
                        <StyledLink to={`/Fiche_logement/${item.id}`} className='col-md-4' key={item.id}>

                            <img src={item.cover} alt={item.title} className='house-image'/>

                            <Rectangle>

                                <h4 className='item-title'>{item.title}</h4>
                            </Rectangle>
                            
                        </StyledLink>
                        );
                    })}

            {/* <Img></Img>

            <Rectangle></Rectangle>

            <StyledLink to="/A_propos">
                Titre de la location
            </StyledLink> */}

        </ThumbCard>
    )
}
    
export default Thumb