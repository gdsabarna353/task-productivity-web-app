import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = (props) => {
  return (
    <div>
        <ol className='task-section'>
          {props.tasks && 
          props.tasks.length > 0 ? (props.tasks.map((item) => (
            <li className='task' key={item.id}>
              <TaskItem taskId={item.id} item={item} handleToggleTask={props.handleToggleTask} handleDeleteTask={props.handleDeleteTask}/>
            </li>
          ))) : (
            <div className='no-tasks'>No tasks found.</div>
          )}
        </ol>
    </div>
  )
}
