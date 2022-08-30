import Accordion from 'react-bootstrap/Accordion'

import "./style.scss"

function Accordeon({ title, children, numero })
{
    return (
        <Accordion alwaysOpen className="col-md-6 mb-4">

            <Accordion.Item eventKey={numero}>

                <Accordion.Header>{title}</Accordion.Header>

                <Accordion.Body>
                    {children}
                </Accordion.Body>

            </Accordion.Item>

        </Accordion>
    )
}

export default Accordeon