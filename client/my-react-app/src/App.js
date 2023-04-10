import {useState,useEffect, useRef} from 'react'

import './App.css';





function App() {
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])


  const [users,setUsers]=useState([]);
  const nameref= useRef();
  const emailref=useRef();

  const handleAddUser = e => {
    const name=nameref.current.value;
    const email=emailref.current.value;

    const info={name:name,email:email};
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const newAddeduser=data;
      const newdata=[...users,newAddeduser];
      setUsers(newdata);
    })

    nameref.current.value='';
    emailref.current.value='';
    e.preventDefault();
  }

  return (
    <div className="App">
     <h1>Found user : {users.length}</h1> 

     <form onSubmit={handleAddUser}>
      <input type='text' ref= {nameref}placeholder='name'/>
      <input type='text' ref={emailref} placeholder='This is mail'/>
      <input type='submit' value='submit'/>
     </form>
     <ul>
      {
        users.map(user=><li key={user.id}>{user.name}</li>)
      }
     </ul>
    </div>
  );
}

export default App;
