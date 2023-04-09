const express = require('express')
const app = express()
const port = 5000

const users=[
    {id: 0, name:"minhaj"},
    {id:1, name:"fahad"},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req,res)=>{
    res.send('Here is my user')
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})