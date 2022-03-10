import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';


export const MemoHook = () => {

    const {counter,increment}=useCounter(5000);
    const [show, setshow] = useState(true);

    const memoProcesoPesado= useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>

            <hr/>

            <p>{memoProcesoPesado}</p>

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
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
