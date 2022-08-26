import Card from '../Card';

import "./style.scss"
// datas
import Data from "../../datas/logements.json"

function Wrapper()
{
    return (
        <div className='container'>
            <div className="row">

                {
                    Data.map((item) => {
                        return <Card house={item} number={"1"}></Card>
                    })
                }
    
            </div>
        </div>
    )
}

export default Wrapper