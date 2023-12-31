import React from 'react'
import Card from './Card'

function Cards({setLoader}) {
    return (
        <div className=' cards container'>
            <Card setLoader = {setLoader} />
        </div>
    )
}

export default Cards