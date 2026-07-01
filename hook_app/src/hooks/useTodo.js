import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = (todo) => {

    //  const initialState = [];

    const init =() => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }  

    //TODO crear un custom hook para el todoApp DONE
    //exponer todos, handleNewTodo, handleDeleteTodo, handleToggleTodo DONE
    //
    const [todos, dispatch] = useReducer(todoReducer, [],init);  
  

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo=(todo)=>{
        console.log({todo});
        const action = {
            type:'[TODO] Add Todo',
            payload: todo,
        };
        dispatch(action);
    }

    const handleDeleteTodo=(id)=>{
        // console.log({id});
        dispatch({
            type:'[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo=(id)=>{
        // console.log({id});
        dispatch({
            type:'[TODO] Toggle Todo',
            payload: id,
        });
    }

    return{
        todos,
        // ...todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
} 

