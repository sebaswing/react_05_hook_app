import React from 'react'

export const PokemonCard = ({ id,name,sprites=[] }) => {
    return (
        <section
            style={{
            height: 200,
            borderRadius: 12
        }}
        >
            <h2
                className='text-capitalize'
            >
                #{id}-{name}
            </h2>
            <div className='d-flex flex-wrap justify-content-center'>
                {sprites.map((sprite) => (
                    <img 
                        key={sprite}
                        style={{height: 160, borderRadius: 12}}
                        src={sprite}
                        alt={name}
                    />
                ))}
            </div>
        </section>
    )
}
