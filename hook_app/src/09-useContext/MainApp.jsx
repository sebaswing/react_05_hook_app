import React from 'react'
import { Navigate, Route, Routes,Link } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
export const MainApp = () => {
  return (
    <UserProvider>
        {/* <h1> MainApp</h1> */}
          <NavBar/>
        <hr/>    

        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="login" element={<LoginPage/>} />

            {/* se le dice wild card porque al mandarse a una ruta inexistente se le da un path */}
            {/* <Route path='/*' element={<LoginPage/>}/>  */}
            <Route path="/*" element={<Navigate to="/login"/>} />

        </Routes>
    </UserProvider>
    
  )

}
