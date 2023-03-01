import React, { useState } from "react"

const AddTodo = ({dispatch}) => {

    const [tempInput, setTempInput] = useState('');

    const submitFn = (e) => {
        e.preventDefault();
        dispatch({type: 'ADDTODO', payload: tempInput});
        setTempInput('');
    }

    return (
        <>
            <form id="todo-form" onSubmit={submitFn}>
                <input type="text" onChange={(e) => setTempInput(e.target.value)} id="todo-input" value={tempInput}/>
                <button type="submit">Add To List</button>
            </form>
        </>
    )
}

export { AddTodo }