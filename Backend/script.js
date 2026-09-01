const express=require('express')

const app = express()

app.get('/', function(req,res){
    res.send("Jai Shree Ram")
})

app.get('/profile', function(req,res){
    res.send("Jai Shree Hanuman")
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})