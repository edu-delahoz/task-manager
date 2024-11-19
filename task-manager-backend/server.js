const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Manager API is running!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
