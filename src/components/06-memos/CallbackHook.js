import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);

    // const increment=()=>{
    //     setcounter(counter+1);
    // }

    const increment = useCallback( (num) => {
        setcounter(c=>c+num);
      }, [setcounter])
    
      useEffect(() => {
        //??
      },[increment])
      

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>

            <ShowIncrement increment={increment}/>

        

        </div>
    )
}
