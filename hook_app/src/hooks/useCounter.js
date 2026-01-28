
import { useState } from "react";
export const useCounter = (initValue=0) =>{

    const [counter, setCounter] = useState(initValue);
    
    return{
        counter,
    }

};