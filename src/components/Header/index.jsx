import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import "./style.scss"

function Header()
{
    return (
        <header className='container'>
         
            <nav className='row justify-content-between align-items-center'>

                <div className="col col-md-6">
                    <Link to="/">
                        <img className='homelogo' src={Logo} alt="" />
                    </Link>
                </div>

                <div className='col col-md-6 d-flex justify-content-end'>
                    <Link className='nav-link' to="/">
                        Accueil
                    </Link>

                    <Link className='nav-link' to="/A_propos">
                        A Propos
                    </Link>
                </div>

            </nav>
         
        </header>
    )
}
    
export default Header