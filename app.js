const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, world!',
  })
})
 
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})