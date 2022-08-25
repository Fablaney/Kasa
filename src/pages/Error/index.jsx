import { Link } from "react-router-dom"
import styled from "styled-components"


const ErrorContainer = styled.div
`
    color: #FF6060;
    text-align: center;
    padding-top: 100px;

    @media (max-width: 768px)
    {
        padding-top: 90px;
    }
`
const ErrorNumber = styled.div
`
    font-size: 288px;
    font-weight: 700;
    margin-bottom: 66px;

    @media (max-width: 768px)
    {
        font-size: 96px;
        margin-bottom: 10px;
    }
`
const ErrorTile = styled.h1
`
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 182px;

    @media (max-width: 768px)
    {
        font-size: 18px;
        margin-bottom: 133px;
    }
`
const ErrorLink = styled.div
`
    font-size: 18px;
    font-weight: 500;
    color: #FF6060;
    padding-bottom: 29px;

    @media (max-width: 768px)
    {
        font-size: 14px;
    }
`

function Error()
{
    return (
        <ErrorContainer>

            <ErrorNumber>
                404
            </ErrorNumber>

           <ErrorTile>
                Oups! La page que vous demandez n'existe pas.
           </ErrorTile>

            <Link to="/">
                <ErrorLink>Retourner sur la page d’accueil</ErrorLink>
            </Link>

        </ErrorContainer>
    )
}

export default Error