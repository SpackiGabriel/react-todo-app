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

    const updateHandler = async (todo) => {
        todo.done = !todo.done

        const data = await fetch(API + "/todos/" + todo.id, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setItems((prevState) => prevState.map((t) => (t.id === data.id ? (t = data) : (t = t))))
    }

    return (
        <ul className='list'>
            {items.length === 0 ? (
                <p>There no tasks yet!</p>
            ) : items.map((item) => (
                <Item 
                    todo = {item}
                    deleteHandler = {deleteHandler}
                    updateHandler = {updateHandler}
                />
            ))}
        </ul>
    );
}

export default List;
