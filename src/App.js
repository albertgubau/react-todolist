import './App.css';
import { Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react'
import NavBar from './components/NavBar';
import ToDoList from './pages/ToDoList'
import Login from './pages/Login'


const App = () => {
  
  const [logged, setLogged] = useState(false)
  
  const [currentUser, setCurrentUser] = useState({})

  const users = [
    {
      id:0,
      username: 'john',
      password: '1234'
    }
  ]
  
  const navigate = useNavigate();

  const handleLogin = (name, pss) =>{
    users.forEach((user) =>{
      if(user.username === name && user.password === pss){
        setLogged(true);
        setCurrentUser(user);
        navigate('/todo')
      }else{
        alert('Not valid username or password')
      }
    })
  }

  return (
      <div>
        <NavBar logged = {logged} currentUser = {currentUser}/>
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin}/>}></Route>
          <Route path="/todo" element={<ToDoList logged = {logged}/>}></Route>
        </Routes>
      </div>
  )
}

export default App;
