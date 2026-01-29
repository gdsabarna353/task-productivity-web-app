import React, { useState } from 'react'
import { TaskItem } from './TaskItem'

export const Main = (props) => {

  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <div className='main'>
      <div className='task-form'>
        <input
          type="text"
          placeholder='Enter the task'
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button
          className= {newTaskTitle.trim().length === 0 ? 'btn primary-btn disabled' : 'btn primary-btn'}
          onClick={() => {
            props.handleAddTask(newTaskTitle);
            setNewTaskTitle("")
          }}
          disabled={newTaskTitle.trim().length === 0}
        >Add Task</button>
      </div>
      <div className='task-count'>
        <h5 className='primary'>Total tasks: {props.totalTasks}</h5>
        <h5 className='success'>Completed tasks: {props.completedTasks}</h5>
        <h5 className='warning'>Pending tasks: {props.pendingTasks}</h5>
      </div>
      <h1>List of Tasks:</h1>
      <div>
        <ol className='task-section'>
          {props.tasks && props.tasks.map((item) => (
            <li className='task' key={item.id}>
              <TaskItem taskId={item.id} item={item} handleToggleTask={props.handleToggleTask} handleDeleteTask={props.handleDeleteTask}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
