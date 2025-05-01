import React from 'react'

const HorizontalComparison = (props) => {

    return (
        <div className='horizontal-comparison' id={props?.id ? props?.id : ""}>
            <h2 className='heading' dangerouslySetInnerHTML={{ __html: props.data.heading }}></h2>
            <p className='description' dangerouslySetInnerHTML={{ __html: props.data.subheading }}></p>
            <div className='comparison-container'>
                {props.data.items.map((item, index) => (
                    <div className='item' key={index}>
                        <div className='upper'>
                            <img src={item.img} alt={item.subheading} />
                        </div>

                        <div className='lower'>
                            <p className='subheading' dangerouslySetInnerHTML={{ __html: item.subheading }}></p>
                            <div className='list-items'>
                                <ul>
                                    {item.list.map((eachObj, index) => (
                                        <li key={index} className='list-item' dangerouslySetInnerHTML={{ __html: eachObj.text }}>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default HorizontalComparison