import { useEffect } from "react";
import { use, useState } from "react"

export const useFetch = () => {
  
    const [state, setState] = useState({
        data: null,
        isLoading:true,
        hasError: false,
        errorMessage: null,
    });

    useEffect(() => {
        getFetch();   
    //   return () => {
    //     second
    //   }
    }, []);

    const getFetch = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/647');
        const data = await response.json();
        console.log({data}); 
    };
    

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}
