import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'strider@gmail.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);  // Se ejecuta solo una vez al cargar el componente

    useEffect(() => {
        // console.log('formstate changed!');
    }, [formState]); // Se ejecuta cada vez que cambia el formState 
    useEffect(() => {
        // console.log('email changed!');
    }, [email]); // Se ejecuta cada vez que cambia el email
    return (
        <> {/* Recordar poner ese contenedor  */}
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="sebas@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username=== 'strider2') && <Message/>

            }

            {
                // <Message className="hidden"/> no se desmonta el componente, solo se oculta
            }

        </>
    )
}
