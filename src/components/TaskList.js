import React from 'react'
import TaskCard from './TaskCard'
import './TaskList.css'

const TaskList = ({tasks, searchTitle, deleteTask, editTask, changeColor}) => {
  
    if(tasks.length === 0){
        return <h1 className="noTasks">There are no tasks</h1>
    }

    if(searchTitle ===''){
        return (
            <div className="taskList">
                {tasks.map( ({id, title, color}) => (
                <TaskCard key = {id} id={id} title = {title} color = {color} deleteTask={deleteTask} editTask={editTask} changeColor = {changeColor}/>))}
            </div>
        )
    }

    let counter = 0;

    return (
        <div className="taskList">
            {tasks.map( ({id, title, color, edit}) => {
                
                if(title.toLowerCase().includes(searchTitle.toLowerCase())){
                    counter+=1
                    return(<TaskCard key = {id} id={id} title = {title} color = {color} edit={edit} deleteTask={deleteTask} editTask={editTask} changeColor = {changeColor}/>)
                }
            })
            }
            
            {counter===0?<p className="noTasksFound">No tasks found</p>:''}
            
        </div>

        

    )
}

export default TaskList