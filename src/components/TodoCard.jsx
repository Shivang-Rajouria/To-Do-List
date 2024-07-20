import React from 'react'


export default function TodoCard(props) {
    const {children, handleDeleteTodos, index, handleUpdateTodos} = props
  return (
      <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
            <button onClick={()=>{
                handleUpdateTodos(index)
            }}>
             <i className="fa-solid fa-square-check"></i>
            </button>
            <button onClick={()=>{
                handleDeleteTodos(index)
            }}>
            <i className="fa-solid fa-trash-can"></i>
            </button>
            </div>
        </li>
  )
}
