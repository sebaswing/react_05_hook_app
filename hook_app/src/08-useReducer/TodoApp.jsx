import { useReducer,useEffect } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

    const {todos,handleNewTodo,handleDeleteTodo,handleToggleTodo} = useTodo();
    return (
        <>
            <h1>TodoApp: {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
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