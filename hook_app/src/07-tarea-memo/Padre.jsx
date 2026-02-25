import { Hijo } from './Hijo'
import { useState } from 'react';
import React, { useCallback } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => { // incrementa pero hace que se vuelva a generar el componente hijo
    //     setValor( valor + num )
    // }

    // const incrementarFather = useCallback(
    //   (num) => { // esta funcion sirve y cambia porque toma automatico el valor anterior
    //     setValor( valor + num);
    //   },
    //   [valor],
    // )
    
    const incrementarFather = useCallback(
      (num) => { // esta funcion no necesita la dependencia e igualmente funciona porque toma el valor anterior
        setValor( (oldValue) => oldValue + num);
      },
      [],
    )

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementarFather }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
