const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile("templetes/index.html",{root:__dirname})
})
// app.get('/blog/slug', (req, res) => {
//   let blogTitle="adidas Why and when"
//   let blogContant="It`s a very good brand"
//   res.render("blogpost",{blogTitle: blogTitle,blogContant: blogContant})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})