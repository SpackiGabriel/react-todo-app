import { FaRegClock, FaRegTrashAlt, FaCheck } from 'react-icons/fa'

import './Item.css'


function Item({name, duration, id, deleteHandler}) { 
    return (
        <li className='item' key={id}>
            <h3 className='item-title'>{name}</h3>

            <div className='item-container'>
                <p>{duration}</p>
                <FaRegClock />
            </div>

            <div className='item-container'>
                <FaCheck className='item-action' />
                <FaRegTrashAlt className='item-action' onClick={() => deleteHandler(id)} />
            </div>
        </li>
    );
}

export default Item;
