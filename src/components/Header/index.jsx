import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'

const HeaderContainer = styled.header
`
    padding: 40px 0px;

    @media (max-width: 768px)
    {
        padding: 20px 0 20px 0;
    }
`
const HomeLogo = styled.img
`
    height: 68px;

    @media (max-width: 768px)
    {
        height: 47px;
    }
`
const StyledLink = styled(Link)
`
    padding: 10px 15px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: #FF6060;

    &:hover
    {
        color: #FF6060;
        text-decoration: underline;
    }

    @media (max-width: 768px)
    {
        font-size: 12px;
        padding: 0 10px;
    }
`

function Header()
{
    return (
        <HeaderContainer>
            
            <div className='container'>
               <nav className='row justify-content-between align-items-center'>

                    <div className="col col-md-6">
                        <StyledLink to="/">
                            <HomeLogo src={Logo} />
                        </StyledLink>
                    </div>

                    <div className='col col-md-6 d-flex justify-content-end'>
                        <StyledLink to="/">
                        Accueil
                        </StyledLink>

                        <StyledLink to="/A_propos">
                            A Propos
                        </StyledLink>
                    </div>

                </nav>
            </div>

        </HeaderContainer>
    )
}
    
export default Header