import { useState } from "react";
export const CounterApp = () => {

  // const [counter, setCounter] = useState(10);
  const [state, setCounter] = useState({
      counter1:10,
      counter2:20,
      counter3:30
    });

  const {counter1, counter2, counter3} = state;

  return (
    <>

        <h1>Counter1: {counter1} </h1>
        <h1>Counter2: {counter2} </h1>
        <h1>Counter3: {counter3} </h1>

        <hr />

        {/* <button className="btn"  onClick={() => setCounter(counter + 1)}>+1</button> */}
        <button className="btn"  onClick={
          // () => setCounter( // el objeto se sobreescribe
          //   prev => (//funcion que recibe el estado anterior
          //     {...prev, counter1: prev.counter1 + 1}//mantiene los otros valores
          //     )
          // )

          // () => setCounter({//modifica solo counter1 y re-escribe los otros
          //   counter1: counter1 + 1,
          //   counter2,counter3
          // })

            ()=>setCounter({
              ...state,
              counter1: counter1 + 1
            })
          }>
            +1
        </button>
    </>  
    
  )
}
