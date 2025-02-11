const express = require('express');
const { body, validationResult} = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const databaseAdapter = require('../adapters/databaseAdapter');
 
const router = express.Router();

router.post('/', authMiddleware, 
    [
        body('title').notEmpty().withMessage("El titulo es obligatorio."),
        body('description').isString().withMessage("La descripcion debe ser un texto")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors) {
            return res.status(400).json({errors: errors.array()});
        }

        const { title, description } = req.body;
        const userId = req.userId;

        const newTask = await databaseAdapter.creatTask({userId, title, description});
        res.status(200).json({message: 'Tarea Creada.', task: newTask});
        
    }
)

router.get('/', authMiddleware, async (req, res) => {
    const userId = req.userId;
    const tasks = await databaseAdapter.getTaskByUser(userId);
    res.json(tasks);
})

module.exports = router;