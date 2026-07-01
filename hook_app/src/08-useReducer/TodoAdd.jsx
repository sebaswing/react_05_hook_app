import React from 'react'
import { useForm } from '../hooks/useForm';



export const TodoAdd = ({onNewTodo}) => {

    const{description,onInputChange,onResetForm,}=useForm({
        description:'',
    });

    const onFormSubmit=(event)=>{
        event.preventDefault()
        if(description.length <= 1) return;
        const newTodoItem={
                id: new Date().getTime(),
                description: description,
                done: false,
            }
        onNewTodo(newTodoItem);
        onResetForm();  
    }

    // const [input,setInput]=useState('');

    // const onFormSubmit=(event)=>{
    //     event.preventDefault()
    //     const newTodoItem={
    //             id: new Date().getTime(),
    //             description: input,
    //             done: false,
    //         }
    //     onNewTodo(newTodoItem)
    // }

    return (
    <form onSubmit={onFormSubmit}>
        <input
            type="text"
            placeholder="¿Que hay que hacer?"
            className="form-control"
            value={description}
            // onChange={(e) => setInput(e.target.value)}
            name='description'
            onChange={onInputChange}
        />  
        <button type="submit"
            // onClick={(e) => onFormSubmit(e)}
            className="btn btn-outline-primary mt-1 ">
            Agregar
        </button>
    </form>
  )
}
