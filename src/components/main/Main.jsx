import React from 'react'

export const Main = (props) => {

  return (
    <div className='main'>
      <h1>List of Tasks:</h1>
      <div>
        <ol>
          {props.tasks && props.tasks.map((item, index) => (
            <li className='task' key={index}>
              <span>{item.title} | {item.completed ? "Completed" : "Not Completed"}</span>
              <button onClick={()=> props.toggleTask(index)}>Toggle</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
