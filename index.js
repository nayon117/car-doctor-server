const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('car doctor is running');
})
app.listen(port, (req, res) => {
    console.log(`car doctor is running on port ${port}`)
})