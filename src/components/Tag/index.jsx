import "./style.scss"

function Tag({house})
{
    return (
        <div className='d-flex justify-content-start gap-2 house-tags d-flex flex-wrap mt-4'>

            {house.tags.map((tag) => (
                <div className='tag' key={tag}>
                    {tag}
                </div>
            ))}

        </div>
    )
}

export default Tag