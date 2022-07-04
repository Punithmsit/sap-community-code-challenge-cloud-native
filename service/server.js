const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`Your Node.js service is running on port ${PORT}...`);
});

app.get('/greeting/:communityID', (req, res) => {
  res.send(`Hey ${req.params.communityID}, really nice seeing you here! 🙂`);
});

app.get('/welcome/:welcomeID', (req, res) => {
  res.send(`Hi ${req.params.welcomeID}, Welcome to Community Code Challenge!!!`)
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});