import js from '@eslint/js';
import React, { use } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

export const PokemonCard = ({ id,name,sprites=[] }) => {

    const h2Ref=useRef();
    const [boxSize, setboxSize] = useState({height: 0, width: 0});
    useLayoutEffect(() => {

        // if (!h2Ref.current) return;

        const { height, width }= h2Ref.current.getBoundingClientRect();

        setboxSize({height, width});

        // console.log({height,width});

    },[name]);


    return (
        <section
            style={{
            height: 200,
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 12
        }}
        >
            <h2
                ref={h2Ref}
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
            <pre>
                {JSON.stringify(boxSize)}
            </pre>
        </section>
    )
}
