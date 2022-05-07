const User = require("../models/User")

module.exports = class UserService {
    static create({ id, username, name}){
        return new User({
            id: id,
            username: username,
            name: name,
            bio: "Hello"
        })
    }
    static getInfo(user){
        let info = []
        for (let attr in user){
            info.push(user[attr])
        }
        return info
    }
    static updateUserUsername(user, new_username){
        console.log(user);
        user.setUsername = new_username
    }

    static getAllUsernames(users){
        let names = []
        for (let user of users){
            names.push(user.name)
        }
        return names
    }
}