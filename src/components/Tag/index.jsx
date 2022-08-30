import "./style.scss"

function Tag({house})
{
    return (
        <div className='d-flex justify-content-start gap-2 house-tags d-flex flex-wrap'>

            {house.tags.map((tag) => (
                <div className='tag' key={tag}>
                    {tag}
                </div>
            ))}

        </div>
    )
}

export default Tag