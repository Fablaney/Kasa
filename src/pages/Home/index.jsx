import Wrapper from '../../components/Wrapper'
import "./style.scss"

function Home()
{
    return (
        <div className='padding-sm-5'>

            <div className='banner-home container d-flex align-items-center'>

                <h1 className='banner-text text-lg-center text-md-left'>Chez vous, partout et ailleurs</h1>

            </div>

            <Wrapper></Wrapper>
 
        </div>
    )
}

export default Home