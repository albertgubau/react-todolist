import '../App.css';
import { useState } from 'react'
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskSearch from '../components/TaskSearch';

function ToDoList({logged}) {
  
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  
  const [searchTitle, setSearchTitle] = useState('');


  const createTask = () =>{
    setTasks([...tasks,
      {
        id: tasks.length,
        title,
        color: 'indianred'
      }])
  }

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const editTask = (taskId, newTitle) => {
    tasks.forEach((task)=>{
      if(task.id === taskId){
        task.title = newTitle;
      }
    })
    console.log(tasks)
  }
  
  const handleSearchInput = (e) => setSearchTitle(e.target.value);


  const handleChange = (e) => setTitle(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
    setTitle('');
  }

  const changeColor = (color, id)=>{
    
    tasks.forEach((task)=>{
      if(task.id === id){
        task.color = color;
      }
    })
  }

  return (
    
    <div className="toDoList">
      
      <div className="inputs">
        
        <TaskSearch handleSearchInput={handleSearchInput} logged={logged}/>
      
        <TaskForm handleChange={handleChange} handleSubmit={handleSubmit} title={title} logged={logged}/>
      
      </div>

      <TaskList className="taskList" tasks = {tasks} deleteTask = {deleteTask} editTask={editTask} searchTitle={searchTitle} changeColor={changeColor}/>
      
    </div>
  );
}

export default ToDoList;
