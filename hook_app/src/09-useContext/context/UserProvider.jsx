import { UserContext } from "./UserContext"

const user = { 
    id:123,
    name: 'Sebastián B',
    email: 'SebastianB@googl.com'
}

export const UserProvider = ( { children } ) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo',user:user}} >
      {children}
    </UserContext.Provider>
  )
}
