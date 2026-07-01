import { useReducer,useEffect } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init =() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};



export const TodoApp = () => {
    //TODO crear un custom hook para el todoApp
    //exponer todos, handleNewTodo, handleDeleteTodo, handleToggleTodo
    //
    const [todos, dispatch] = useReducer(todoReducer, initialState,init);  
    
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

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/*TodoList debe recibir una property que son los TODO nuevo componente*/ }
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo} 
                        onToggleTodo={handleToggleTodo} 

                    />
                </div>

                <div className="col-5">
                    <h4>
                        Agregar TODO
                    </h4>
                    <hr />
                    {/* TodoAdd onNewTodo(todo) nuevo componente*/}
                    {/* {id:new Date()...,description:'',done:false} */}
                        <TodoAdd onNewTodo={handleNewTodo} />
                    {/*Fin TodoAdd*/}
                </div>
            </div>
        </>
    )
}