import React from 'react'

export const TaskItem = (props) => {

    return (
        <>
            <span id="taskTitle">
                <span className={props.item.completed ? 'line-strike' : ''}>{props.item.title}</span>
                {" "}| {props.item.completed ? "Completed" : "Not Completed"}
            </span>
            <button onClick={() => props.toggleTask(props.taskId)}>Toggle</button>
            <button className='danger' onClick={()=> props.deleteTask(props.taskId)}>Delete</button>
        </>
    )
}
