import "./style.scss"

function Accordeon({ title, children, numero })
{
    return (
        <div class="accordions col-md-6 mb-4">

            <div class="accordion" eventKey={numero}>

                <input type="checkbox" id={"accordeon-num-"+numero} />

                <label class="acc-label" for={"accordeon-num-"+numero}>{title}</label>

                <div class="acc-content">
                    {children}
                </div>
            </div>

        </div>

    )
}

export default Accordeon