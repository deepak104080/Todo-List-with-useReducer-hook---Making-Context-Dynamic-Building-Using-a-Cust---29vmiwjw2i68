import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {

  const initialValues = [];
  const [state,dispatch] = useReducer(todoReducer,initialValues)
  
  useEffect(() => {
    console.log('list - ', state)
  })
 
  return (
    <div id="main">
      <AddTodo dispatch = {dispatch}/>
     {
      state.map((item, index) => (
        <Todo data={item} key={item.id} dispatch={dispatch}/>
      ))
     }
    </div>
  )
}


export default App;
