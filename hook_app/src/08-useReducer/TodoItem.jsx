import React from 'react'

export const TodoItem = ({todo:{id,description,done},onDeleteTodo}) => {
    return (
        <li className="list-group-item d-flex justify-content-between" >
            <span className="align-self-center">
                {description}
            </span>
            <button 
                className="btn btn-danger "
                onClick={ ()=>onDeleteTodo(id) }
            >
                Borrar
            </button>
        </li>
    )
};