const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {addUser, getUserByEmail} = require('../ports/userPort');


const registerUser = async (req, res) => {

    try{
    const { email, password } = req.body;

    const existingUser = getUserByEmail(email);
    if (existingUser){
        return res.status(400).json({ message : "Email already in use"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = addUser({ email, password:hashedPassword});

    res.status(201).json({ message: 'User registered successfully', user: newUser });
    }catch(error){
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
}

const loginUser = async (req, res) => {

    //logica


}

module.exports = { registerUser, loginUser};