
import React from "react";
import "./Task.css"

const  Task = ({ task, handleTaskClick }) => {
    return(
        <div
            className="task-container"
             style={task.completed ? {borderLeft: '6px solid BlueViolet'} : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div>
                <button className="remove-task-button"> X </button>
            </div>
        </div>
    )

};

export default Task;
