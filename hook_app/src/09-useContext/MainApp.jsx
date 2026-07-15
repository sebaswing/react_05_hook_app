import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
export const MainApp = () => {
  return (
    <>
        <h1> MainApp</h1>
        <hr/>    


        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="about" element={<AboutPage/>} />

            {/* se le dice wild card porque al mandarse a una ruta inexistente se le da un path */}
            {/* <Route path='/*' element={<LoginPage/>}/>  */}
            <Route path="/*" element={<Navigate to="/login"/>} />

        </Routes>
    </>
    
  )

}
