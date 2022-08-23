import logo from '../../assets/logo.svg'
import './style.css'

function Home()
{
    return (
        <div className="App">
            Home
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="_#"
                    target="blank"
                >
                  Learn React
                </a>
            </header>
        </div>
    )
}

export default Home