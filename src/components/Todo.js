import React from 'react';
const Todo = (props) => {
    const {data, dispatch} = props;
    const {id, title} = data;
    console.log('props', props);
    return (
        <>
            <div className="todo">
                <div className='todo-title'>
                    {title}
                    <input type="checkbox" value={id}/>
                    <button className='todo-delete' onClick={() => dispatch({type: 'DELETETODO', payload: id})}>Delete</button>
                </div>
            </div>
        </>
    )
}


export { Todo }

