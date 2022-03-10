import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

export const RealExampleRef = () => {

    const [show, setshow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            {show && <MultipleCustomHook/>}

            <button
                className='btn btn-primary mt-5'
                onClick={()=>{
                    setshow(!show);
                }}
            >
                Show/hide
            </button>

        </div>
    )
}
