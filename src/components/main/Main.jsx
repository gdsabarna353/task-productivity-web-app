import React from 'react'

export const Main = (props) => {

  return (
    <div className='main'>
      <h1>List of Tasks:</h1>
      <div>
        <ol>
          {props.tasks.map((item) => (
            <li>{item.title} | {item.completed ? "Completed" : "Not Completed"}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
