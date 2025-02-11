const DBLocal = require("db-local");

const { Schema } = new DBLocal({path : "./db"})

const User = Schema("User", {

    _id: {typeof: "string", required: true},
    username: {typeof: "string", required: true},
    password: {typeof: "string", required: true},
})

export class UserRepository {

    static create({username, password}) {}
    static login({username, password}) {}
    

}