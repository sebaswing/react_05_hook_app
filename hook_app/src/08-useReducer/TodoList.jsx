import React from 'react'
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group">
        {
            todos.map(todo => (
                //nuevo elemento TodoItem -> se le mande la información correcta para que se vea el item 
                <TodoItem 
                    key={todo.id}
                    description={todo.description} 
                    done ={todo.done}
                />                
            ))
        }
    </ul>
  )
}
