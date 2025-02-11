const { randomUUID } = require('crypto');
const bcrypt = require('bcrypt');

class User {
    constructor(username, password){
        this.id = randomUUID();
        this.username = username;
        this.password = password;
    }

    async setPassword(password){
        this.password = await bcrypt.hash(password, 10);    
    }

    async checkPassword(password){
        return await bcrypt.compare(password, this.password);
    }
}


module.exports = { addUser, getUserByEmail, getUserById };
