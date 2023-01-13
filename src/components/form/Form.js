import { useState } from 'react'

import Input from './Input/Input'

import './Form.css'


const API = "http://localhost:8000/"

function Form() {

    const [form, setForm] = useState({})

    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value

        setForm(values => ({...values, [name]: value}))
    }   

    const submitHandler = async (e) => {
        e.preventDefault()
        
        await fetch(API + "todos", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        setForm({})
    }

    return (
        <form className='form' onSubmit={(e) => submitHandler(e)}>
            <Input
                label="What are you going to do?"
                name="todo"
                value={form.todo}
                placeholder="Task's name"
                handler={handleChange}
            />

            <Input
                label="How much time will it take?"
                name="time"
                value={form.time}
                placeholder="Duration time"
                handler={handleChange}
            />

            <button>Create todo!</button>
        </form>
    );
}

export default Form;
