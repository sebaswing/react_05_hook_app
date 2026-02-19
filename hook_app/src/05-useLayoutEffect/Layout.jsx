import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {
    
   const  {counter, increment, decrement, reset}= useCounter(1); 
   const { data, isLoading, hasError } = useFetch( 
    `https://pokeapi.co/api/v2/pokemon/${counter}`
);

    return (
        <>
            <h1>Información del Pokémon</h1>
            <hr />

            {isLoading ? 
                <LoadingMessage />:
                <PokemonCard 
                    id={data?.id} 
                    name={data?.species.name}
                    sprites={[
                        // data?.sprites.other['official-artwork'].front_default,
                        data?.sprites.front_default,
                        data?.sprites.back_default,
                        // data?.sprites.other['official-artwork'].front_shiny,
                        data?.sprites.front_shiny,
                        data?.sprites.back_shiny,

                    ]}
                />
            }



            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
            {/* <h2>{data?.species.name}</h2> */}

            <button
                className='btn btn-primary mt-2'
                onClick={() => counter > 1 ? decrement():null}
            >
                Anterior
                
            </button>
            <button
                className='btn btn-primary mt-2'
                onClick={() => increment()}
            >    
                Siguiente
            </button>
        </>
    )
}
