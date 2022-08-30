import Card from '../Card';
import "./style.scss"

// datas
import Data from "../../datas/logements.json"

function Wrapper()
{
    return (
        <div className='container wrapper'>
            <div className="row">

                {
                    Data.map((item) => {
                        return <Card house={item} key={item.id}></Card>
                    })
                }
    
            </div>
        </div>
    )
}

export default Wrapper