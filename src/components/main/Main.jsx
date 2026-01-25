import React from 'react'
import { TaskItem } from './TaskItem'

export const Main = (props) => {

  return (
    <div className='main'>
      <h1>List of Tasks:</h1>
      <div>
        <ol>
          {props.tasks && props.tasks.map((item, index) => (
            <li className='task' key={index}>
              <TaskItem index={index} item={item} toggleTask={props.toggleTask}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
