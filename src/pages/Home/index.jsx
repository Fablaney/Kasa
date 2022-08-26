import styled from 'styled-components'
import banner from '../../assets/banner.jpg'

import Thumbs from '../../components/Thumb'

const Banner = styled.div
`
    height: 223px;
    margin-top: 100px;
    margin-bottom: 43px;
    border-radius: 25px;

    background: rgba(0, 0, 0, 0.3) url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;

    @media (max-width: 768px)
    {
        
    }
`
const BannerText = styled.div
`
    font-size: 48px;
    color: white;
    width: 100%;

    @media (max-width: 768px)
    {
        width: 217px;
        font-size: 24px;
    }
`

function Home()
{
    return (
        <div>
            <Banner className='container d-flex align-items-center'>

                <BannerText className='text-lg-center text-md-left'>Chez vous, partout et ailleurs</BannerText>

            </Banner>

            <Thumbs></Thumbs>
 
        </div>
    )
}

export default Home