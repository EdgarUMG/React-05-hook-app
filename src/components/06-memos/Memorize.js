import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';

export const Memorize = () => {

    const {counter,increment}=useCounter(10);
    const [show, setshow] = useState(true);

    return (
        <div>
        <h1>Counter: <Small value={counter}/></h1>

        <hr/>

        <button
            className='btn btn-primary m-5'
            onClick={increment}
        >
            +1
        </button>

        <button
            className='btn btn-primary'
            onClick={()=>{
                setshow(!show)
            }}
        >
            Show/Hide{JSON.stringify(show)}
        </button>

        </div>
    )
}
