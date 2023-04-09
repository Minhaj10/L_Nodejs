import {useState,useEffect} from 'react'

import './App.css';





function App() {
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  const [users,setUsers]=useState([]);
  return (
    <div className="App">
     <h1>Found user : {users.length}</h1> 
     <ul>
      {
        users.map(user=><li>{user.name}</li>)
      }
     </ul>
    </div>
  );
}

export default App;
