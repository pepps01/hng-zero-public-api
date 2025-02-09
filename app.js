const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000

app.use(cors());


app.get('/', (req, res) => {
  const email = req.query.email; 

  if (!email) {
    return res.status(400).json({
      error: "Email query parameter is required"
    });
  }

  const currentDatetime = new Date().toISOString(); 
  const response = {
    email: email, 
    current_datetime: currentDatetime,
    github_url: "https://github.com/pepps01/hng-zero-public-api" 
  };

  res.status(200).json(response);
});


app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})