import { useEffect } from "react";
import { use, useState } from "react"

export const useFetch = ( url ) => {
  
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
    }, [url]);

    const setLoadingState = () => {
        setState({
            data:null,
            isLoading:true,
            hasError:false,
            error:null,
        });
    };

    const getFetch = async () => {

        setLoadingState();
        
        const response = await fetch(url);//'https://pokeapi.co/api/v2/pokemon/647'

        //sleep
        await new Promise (resolve=> setTimeout(resolve,2000));

        if(!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                errorMessage: {
                    code: response.status,
                    message: response.statusText,
                },
            });
            return;
        };

        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            errorMessage: null,
        });
        console.log({data}); 
    };
    

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };

}
