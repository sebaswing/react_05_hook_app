import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationNumber = 100) => {
    for(let i =0; i < iterationNumber; i++){
        console.log('Ahi vamos...')
    };
    return `${iterationNumber} iteraciones realizadas`;
};

export const MemorHook = () => {

    const { counter, increment } = useCounter(450);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-outline-primary"
                onClick={() => increment(1)}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}  
            >
                show/hide {JSON.stringify(show)}

            </button>

        </>
    )
}
