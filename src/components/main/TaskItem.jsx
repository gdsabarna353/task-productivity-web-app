import React from 'react'

export const TaskItem = (props) => {

    return (
        <>
            <div id="taskTitle" className={props.item.completed ? 'success' : 'warning'}>
                <span className={props.item.completed ? 'line-strike' : ''}>{props.item.title}</span>
                {" "}| {props.item.completed ? "Completed" : "Not Completed"}
            </div>
            <div className="btn-group">
                <button className='btn primary-btn' onClick={() => props.handleToggleTask(props.taskId)}>Toggle</button>
                <button className='btn danger-btn' onClick={()=> props.handleDeleteTask(props.taskId)}>Delete</button>
            </div>
        </>
    )
}
