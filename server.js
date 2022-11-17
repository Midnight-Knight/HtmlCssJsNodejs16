
const express = require('express')
const path = require('path')
const app = express()
  
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
  res.sendFile(`${__dirname}/public/one1.html`)
});

app.listen(8000, () => {
  console.log('Application listening on port 8000!')
});