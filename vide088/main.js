
//  express js use garer server banako
const express = require('express')
const app = express()
const port = 3000

//  app.get or app.post or app.put or app.delete( path,handler)
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res) => {
  res.send('Hello about us!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact us1!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog1!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})