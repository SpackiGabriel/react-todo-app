import { useState, useEffect } from 'react';

import Item from './item/Item'

import './List.css'


const API = "http://localhost:8000/todos"

function List() {  

    const [items, setItems] = useState([])

    useEffect(() => {

        const getTodos = async () => {
            
            const data = await fetch(API, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => res.json())
                .then((data) => data)
                .catch((error) => console.log(error))

            setItems(data)
        }

        getTodos()

    }, [])

    const deleteHandler = (id) => {
        setItems((prevState) => prevState.filter(todo => todo.id !== id))

        fetch(API + "/" + id, {
            method: 'DELETE'
        })
    }

    const updateHandler = (id) => {

        const data = items.filter((item) => item.id === id)[0]
        data.done = !data.done        
    
        fetch(API + "/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
    
    }

    return (
        <ul className='list'>
            {items.length === 0 ? (
                <p>There no tasks yet!</p>
            ) : items.map((item) => (
                <Item 
                    name = {item.todo}
                    duration = {item.time}
                    id = {item.id}
                    done = {item.done}
                    deleteHandler = {deleteHandler}
                    updateHandler = {updateHandler}
                />
            ))}
        </ul>
    );
}

export default List;
