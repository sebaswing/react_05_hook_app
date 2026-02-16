import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    
   const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/647');

    return (
        <>
            <h1>Información del Pokémon</h1>
            <hr />

            {isLoading && <p>Cargando...</p>}

            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
            <h2>{data?.species.name}</h2>
        </>
    )
}
