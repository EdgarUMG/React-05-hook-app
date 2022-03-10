import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  //1. Obtener la referencia al userContext
  //2. extraer setUser
  /*
    {
      id:123,
      name:'Fernando'
    }
  */
    const {setUser} = useContext(UserContext);

    console.log(setUser);
  return (
    <div>
        <h1>LoginScreen</h1>
        <hr/>
        <button 
          className='btn btn-primary'
          onClick={()=>setUser({
            id:123,
            name: 'Fernando'
          }) }
        >
          Login
        </button>
    </div>
    
  )
}
