import styled from 'styled-components'
import banner from '../../assets/about.jpg'
import Accordion from 'react-bootstrap/Accordion';

import "./style.scss"

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
function A_propos()
{
    return (
        <div>

            <Banner className='container banner'></Banner>

            <div className="container ">
                <Accordion alwaysOpen className='accordion-about'>

                    <Accordion.Item eventKey="1" className='mb-4'>
                        <Accordion.Header>Fiabilité</Accordion.Header>
                        <Accordion.Body>
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='mb-4'>
                        <Accordion.Header>Respect</Accordion.Header>
                        <Accordion.Body>
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='mb-4'>
                        <Accordion.Header>Service</Accordion.Header>
                        <Accordion.Body >
                            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='mb-4'>
                        <Accordion.Header>Sécurité</Accordion.Header>
                        <Accordion.Body> 
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>

        </div>
    ) 
}

export default A_propos 