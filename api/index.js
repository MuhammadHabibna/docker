const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API Service is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
