import express from 'express'

const app = express()

//route handlers
  
app.get('/', (req, res) => {
  res.send(' World')
})

app.listen(3000) // start the server on port 3000