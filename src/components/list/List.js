import { useState, useEffect } from 'react';

import './List.css'


const API = "http://localhost:8000/todos"

function List() {  

    const [items, setItems] = useState([])

    useEffect(() => {
        const loadData = () => {
            fetch(API)
            .then((data) => {
                return data.json()
            })
            .then((data) => data)
        }

        const data = loadData()
        console.log(data)

    }, [])

    return (
        <div className='list'>
            {items.length === 0 && (
                <p>There no tasks yet!</p>
            )}
        </div>
    );
}

export default List;
