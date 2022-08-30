import "./style.scss"

function Accordion({ title, children, numero })
{
    return (
        <div className="col-md-6">

            <Accordion alwaysOpen >

                <Accordion.Item eventKey={numero} className='mb-4'>

                    <Accordion.Header>{title}</Accordion.Header>

                    <Accordion.Body>
                        {children}
                    </Accordion.Body>

                </Accordion.Item>

            </Accordion>

        </div>
    )
}

export default Accordion