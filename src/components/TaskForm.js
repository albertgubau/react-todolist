import React from 'react'
import './TaskForm.css'

const TaskForm = ({handleChange, handleSubmit, title, logged}) => {
  
    return(
        
        <div className="taskForm">
            
            <h1>Create your task</h1>
            
            <form className="formTask" onSubmit = {handleSubmit}>
                
                {logged ? 
                <div>
                    <input type="text" placeholder ='Write the title of your task' 
                    onChange = {handleChange} 
                    value = {title}/>
        
                    <button className="save-btn">Save Task</button>
                </div> 
                :
                <div onClick={() => alert('You must log in')}>
                    <input type="text" placeholder ='Write the title of your task' 
                    onChange = {handleChange} 
                    value = {title}
                    disabled/>
        
                    <button disabled>Save Task</button>
                </div>}
                

            </form>

        </div>
    )
}

export default TaskForm