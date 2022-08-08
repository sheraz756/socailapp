import express from 'express'
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000
let users = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/user',(req,res)=>{
console.log(req.body)
users.push(req.body)
res.send("user enter")
})
app.get('/user',(req,res)=>{
    res.send(users)

})
app.put('/user',(req,res)=>{
    res.send(users)
    
})
app.delete('/user',(req,res)=>{
    res.send(users)
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})