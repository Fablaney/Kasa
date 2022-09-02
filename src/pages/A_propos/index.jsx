import "./style.scss"

function A_propos()
{
    return (
        <div className='padding-sm-5'>

            <div className='container banner'></div>

            <div className="container p-0">

                <div class="accordions accordion-about mb-4">

                    <div class="accordion">

                        <input type="checkbox" id="accordeon-un"/>

                        <label class="acc-label" for="accordeon-un">Fiabilité</label>

                        <div class="acc-content">
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                        </div>

                    </div>

                </div>

                <div class="accordions accordion-about  mb-4">

                    <div class="accordion">

                        <input type="checkbox" id="accordeon-deux"/>

                        <label class="acc-label" for="accordeon-deux">Respect</label>

                        <div class="acc-content">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </div>

                    </div>

                </div>

                <div class="accordions accordion-about mb-4">

                    <div class="accordion">

                        <input type="checkbox" id="accordeon-trois"/>

                        <label class="acc-label" for="accordeon-trois">Service</label>

                        <div class="acc-content">
                            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                        </div>

                    </div>

                </div>

                <div class="accordions accordion-about mb-4">

                    <div class="accordion">

                        <input type="checkbox" id="accordeon-quatre"/>

                        <label class="acc-label" for="accordeon-quatre">Sécurité</label>

                        <div class="acc-content">
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </div>

                    </div>

                </div>

            </div>

        </div>
    ) 
}

export default A_propos 