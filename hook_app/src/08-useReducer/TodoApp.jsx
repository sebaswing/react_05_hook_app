import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime()*3,
        description: 'Recolectar la piedra del tiempo',
        done: false
    },
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);   

    const handleNewTodo=(newItem)=>{
        console.log({newItem});
        const addTodoAction = {
            type:'AddItem',
            payload: newItem,
        };

        dispatch(addTodoAction);
    }

    return (
        <>
            <h1>TodoApp :10, <small>pendientes:2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/*TodoList debe recibir una property que son los TODO nuevo componente*/ }
                    <TodoList todos={todos} />
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