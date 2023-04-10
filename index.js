const express = require('express')
const cors=require('cors');


const app = express()
const port = 5000

const users=[
    {id: 0, name:"minhaj"},
    {id:1, name:"fahad"},
]
app.use(cors())
app.post('/users',(req,res)=>{
  res.send('Hitting the post');
})
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