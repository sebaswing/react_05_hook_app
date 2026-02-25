import React from 'react';


export const ShowIncrement = React.memo(({increment}) => {

    console.log('Me volví a generar :(');

    return (
        <button className='btn btn-primary' 
        
        onClick={
            () =>{ increment(5); // se definen los Argumentos que se van a recibir 
        }}
        >
            Incrementar
        </button>
    )
});
