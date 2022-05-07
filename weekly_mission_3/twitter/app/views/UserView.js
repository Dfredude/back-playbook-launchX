const User = require("../models/User")

module.exports = class UserView{
    static createUser(attributes){
        if (attributes === null || attributes === undefined){
            return {
                error: "payload no existe"
            }
        }
        const { id, name, username, bio} = attributes
        let user = new User({
            id: id,
            name: name,
            username: username,
            bio: bio ?? "Hey",
        })
        user.error = typeof id != "number" || 
        typeof name != "string" || 
        typeof username != "string" ? "necesitan tener un valor valido" : null

        return user
    }
}