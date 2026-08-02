import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const {user,setUser} = useContext(UserContext); // se desestructura el user del context, para poder usarlo en el componente
  console.log(user);

  return (
    <>
        <h1>LoginPage</h1>
        <hr/>    

        <pre>
          {JSON.stringify(user,null,3)}
        </pre>

        <button 
          className='btn btn-primary'
          onClick={ ()=> 
            setUser ({id:123, name:'Sebastian Be',email:'Sebastian@mail.com' })
            }
        >
          Establecer usuario
        </button>
    </>
  )
}
