const express = require('express')
const app = express()
const port = 3000
// app.use chai post request chake garna thapeko ho
app.use(express.static("public"))
// get request
app.get('/', (req, res) => {
  console.log("hey it is a get request")
  res.send('Hello World!')
})
// post request
app.post('/', (req, res) => {
  console.log("hey it is a post request")
  res.send('Hello World post')
})
app.put('/', (req, res) => {
  console.log("hey it iss a put request")
  res.send('Hello World put')
})
app.delete('/', (req, res) => {
  console.log("hey it iss a delete request")
  res.send('Hello World delete')
})
app.get('/index',(req, res) => {
  console.log("hey it index")
 res.sendFile('templetes/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
