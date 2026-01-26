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
        <button onClick={() => {
          props.addTask(newTaskTitle);
          setNewTaskTitle("")
        }
        }>Add Task</button>
      </div>
      <h1>List of Tasks:</h1>
      <div>
        <ol>
          {props.tasks && props.tasks.map((item, index) => (
            <li className='task' key={index}>
              <TaskItem index={index} item={item} toggleTask={props.toggleTask} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
