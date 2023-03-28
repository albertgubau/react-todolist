import {React, useState} from 'react'
import './TaskCard.css'
import {BsCheckCircle} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'

const TaskCard = ({id, title, color, deleteTask, editTask, changeColor}) => {
    
    const [colorUpdate, setColorUpdate] = useState(color);

    const [editMode, setEditMode] = useState(false);

    const [editedTitle, setEditedTitle] = useState(title)

    const handleTitleChange = (e) =>{
        setEditedTitle(e.target.value);
    }

    
    const handleEdit = (e) =>{
        e.preventDefault();
        editTask(id, editedTitle)
        setEditMode(false)
    }

    return (
    <div className="card" style={{background:`${colorUpdate}`}}>
        
        {editMode ? 
            <form className="editForm" onSubmit={handleEdit}>
                <input type="text" value={editedTitle} onChange={handleTitleChange}/>
                <button className="validate_btn"><BsCheckCircle/>
                </button>
            </form> 
            : 
            <p className="title" onClick={()=>{setEditMode(true)}}>{editedTitle}</p>
            }
        
        <div className="buttons">
            <button className="btn" onClick={()=>{
                setColorUpdate('seagreen')
                changeColor('seagreen', id)
            }}>Completed</button>
        
            <button className="btn" onClick={()=>{
                setColorUpdate('coral')
                changeColor('coral', id)
            }}>In progress</button>
        
            <button className="btn" onClick={()=>{
                setColorUpdate('indianred')
                changeColor('indianred', id)
            }}>Uncompleted</button>
        
        </div>

        <button className="delete_btn" onClick = {()=>deleteTask(id)}><AiFillDelete/></button>
    </div>
  )
}

export default TaskCard