import React from 'react'
import './TaskSearch.css'

const TaskSearch = ({handleSearchInput, logged}) => {
    
    
    
    return(
        
        <div className="taskSearch">
            
            <h1>Search for a task</h1>
            
            <form className="formSearch" onSubmit = {(e) => e.preventDefault()}>
                
                {logged?
                <div>
                    <input type="text" placeholder ='Write the task' onChange ={handleSearchInput}/>
                </div>
                :
                <div onClick={() => alert('You must log in')}>
                    <input type="text" placeholder ='Write the task' onChange ={handleSearchInput} disabled/>
                </div>}
                

            </form>

        </div>
    )
}

export default TaskSearch