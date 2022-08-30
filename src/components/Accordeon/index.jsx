import Accordion from 'react-bootstrap/Accordion';

import "./style.scss"

function Accordeon({ title, children, numero })
{
    return (
        <div className="col-md-6">

            <Accordion alwaysOpen>

                <Accordion.Item eventKey={numero}>

                    <Accordion.Header>{title}</Accordion.Header>

                    <Accordion.Body>
                        {children}
                    </Accordion.Body>

                </Accordion.Item>

            </Accordion>

        </div>
    )
}

export default Accordeon