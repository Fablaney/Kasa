import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'


const NavContainer = styled.nav
`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`
const HomeLogo = styled.img
`
    height: 70px;
`
const StyledLink = styled(Link)
`
    padding: 10px 15px;
    color: black;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
`

function Header()
{
    return (
        <NavContainer>
            
            header
            <StyledLink to="/">
                <HomeLogo src={Logo} />
            </StyledLink>
           
            <StyledLink  to="/">
                Accueil
            </StyledLink>

        </NavContainer>
    )
}
    
export default Header