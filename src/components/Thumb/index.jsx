import { Link } from 'react-router-dom'
import styled from 'styled-components'

// datas
import Data from "../../datas/logements.json";

// container galerie
const Wrapper = styled.div
`
    background: #F7F7F7;
    border-radius: 25px;
    padding: 56px;
    margin-bottom: 43px;

    @media (max-width: 768px)
    {
        
    }
`
// card des images = Lien vers Fiche_logement
const StyledLink = styled(Link)
`
    border-radius: 25px;
    position: relative;
    height: 340px;
    widht: 100%;
    border: 1px solid red;
`
// Image
const Img = styled.img
`
    width: 100%;
    height: 340px;
    object-fit: cover;
    border-radius: 25px;
` 
// Ombre dégradée
const Ombre = styled.div
`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    position: relative;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    border-radius: 25px;
`
// Titre
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
        <Wrapper className='container'>
            <div className="row">

                {Data.map((item) => {
                    return (
                        <div className="col-md-4 mb-4">

                            <StyledLink to={`/Fiche_logement/${item.id}`} key={item.id}>

                                <Img className='' src={item.cover} alt={item.title}></Img>

                                <Ombre className=''>

                                    <Titre className=''>{item.title}</Titre>

                                </Ombre>

                            </StyledLink>

                        </div>
                    );
                })}

            </div>
        </Wrapper>
    )
}

export default Thumbs