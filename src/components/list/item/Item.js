import { FaRegClock, FaRegTrashAlt, FaCheck } from 'react-icons/fa'

import './Item.css'


function Item({ todo, deleteHandler, updateHandler}) { 
    return (
        <li className={"item " + todo.done} key={todo.id}>
            <h3 className='item-title'>{todo.todo}</h3>

            <div className='item-container'>
                <p>{todo.time}</p>
                <FaRegClock />
            </div>

            <div className='item-container'>
                <FaCheck className='item-action' onClick={() => updateHandler(todo)} />
                <FaRegTrashAlt className='item-action' onClick={() => deleteHandler(todo.id)} />
            </div>
        </li>
    );
}

export default Item;
