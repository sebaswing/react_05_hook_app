import { useEffect, useState } from "react"

export const Message = () => {

  const [coords, setCoord] = useState({x:0, y:0});

  useEffect(()=>{
    // console.log('Message Mounted')
    const onMouseMove = ({x,y})=>{
      const coords = {x, y};
        setCoord(coords);
      // console.log(coords);
    }
     window.addEventListener('mousemove', onMouseMove);
    return()=>{
      // console.log('Message Unmounted')
      window.removeEventListener('mousemove', onMouseMove);
      // hay que tener cuidado con los eventos, si no se eliminan, pueden causar problemas de rendimiento, ya que se ejecutan cada vez que se mueve el mouse, incluso si el componente ya no está montado.
    }
  },[]);

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}