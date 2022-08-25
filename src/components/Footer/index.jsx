import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo-blanc.svg'

const FooterContainer = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 66px;
    padding-bottom: 29px;
    background-color: black;

    @media (max-width: 768px)
    {
        padding-top: 62px;
        padding-bottom: 62px;
    }
`
const HomeLogo = styled.img
`
    width: 122px;
    padding-bottom: 29px;

    @media (max-width: 768px)
    {
        padding-bottom: 20px;
    }
`
const Copyright = styled.p
`
    color: white;
    font-size: 24px;

    @media (max-width: 768px)
    {
        font-size: 12px;
    }
`

function Footer()
{
    return (
        <FooterContainer>

        <Link to="/">
            <HomeLogo src={Logo} />
        </Link>

        <Copyright>© 2020 Kasa. All rights reserved</Copyright>

    </FooterContainer>
    )
}

export default Footer