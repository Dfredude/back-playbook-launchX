const User = require("../models/User")

module.exports = class UserView{
    static createUser(attributes){
        console.log(attributes);
        if (attributes === null || attributes === undefined){
            return {
                error: "payload no existe"
            }
        }
        const { id, name, username, bio} = attributes
        return new User({
            id: id,
            name: name,
            username: username,
            bio: bio ?? "Hey"
        })

    }
}