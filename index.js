const express = require('express')
const cors=require('cors');


const app = express()
const port = 5000

const users=[
    {id: 0, name:"minhaj",email:"minhajumid987@gmail.com"},
    {id:1, name:"fahad",email:"fahad@gamil.com"},
]

//middleware
app.use(cors())
app.use(express.json())

//post method
app.post('/users',(req,res)=>{
  const newUser=req.body;
  newUser.id=users.length;
  users.push(newUser);

  console.log('hitting the post',req.body)
  res.json(newUser);
})



//get method
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searchresult=users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(searchresult);
    }
    else
    res.send(users);
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})