const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('siuu')
})
app.listen(port, () => {
    console.log('listening');
})