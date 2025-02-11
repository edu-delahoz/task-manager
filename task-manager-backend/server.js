require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})


