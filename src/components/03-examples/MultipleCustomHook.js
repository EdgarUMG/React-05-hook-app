import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'


export const MultipleCustomHook = () => {

    const {counter,increment}=useCounter(1);

    const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const{author,quote}=!!data && data[0];
    //console.log(state);
    //console.log(author,quote);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className='blockquote text-right'>
                        <p className='mb-5'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )

            }

            <button 
                onClick={increment} 
                className='btn btn-primary'
            >
                Siguiente quote
            </button>


        </div>
    )
}
