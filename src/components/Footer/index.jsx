import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-blanc.svg'
import "./style.scss"

function Footer()
{
    return (
        <footer>

            <Link to="/">
                <img className='home-logo' src={Logo} alt="" /> 
            </Link>

            <div className="copyright">© 2020 Kasa. All rights reserved</div>

        </footer>
    )
}

export default Footer