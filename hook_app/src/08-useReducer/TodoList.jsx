import React from 'react'
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [],onDeleteTodo,onToggleTodo }) => {
    

    
  return (
    <ul className="list-group">
        {
            todos.map(todo => (
                //nuevo elemento TodoItem -> se le mande la información correcta para que se vea el item 
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo= {onDeleteTodo}
                    onToggleTodo= {onToggleTodo}
                />                
            ))
        }
    </ul>
  )
}
