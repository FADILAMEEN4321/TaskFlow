import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Todo({task,toggleComplete,deleteTodo,editTodoForm}) {
  return (
    <>
    <div className='Todo'>
      <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodoForm(task.id)}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}></FontAwesomeIcon>
      </div>
    </div>
    </>
  )
}
