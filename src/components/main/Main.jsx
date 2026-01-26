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
          props.onAddTask(newTaskTitle);
          setNewTaskTitle("")
        }
        }>Add Task</button>
      </div>
      <h1>List of Tasks:</h1>
      <div>
        <ol>
          {props.tasks && props.tasks.map((item) => (
            <li className='task' key={item.id}>
              <TaskItem taskId={item.id} item={item} toggleTask={props.onToggleTask} deleteTask={props.onDeleteTask}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
