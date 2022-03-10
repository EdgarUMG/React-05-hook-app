import React, { memo } from 'react'

export const Small = memo(({value}) => {

    console.log(":c")
    //http
    return (

        <small>{value}</small>
    )
})
