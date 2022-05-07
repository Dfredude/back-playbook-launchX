const User = require("../../app/models/User")
const UserService = require("../../app/services/UserService")

describe("Tests for UserService class", ()=> {
    const user = UserService.create({
        id: 1,
        username: "fredude",
        name: "Fred"
    })
    test('1) Create static method', () => { 
        expect(user.id).toBe(1)
        expect(user.username).toBe("fredude")
        expect(user.name).toBe("Fred")
        expect(user.bio).not.toBeUndefined()
     })
    test('2) Add "getInfo" static method', ()=> {
        
        const user_info = UserService.getInfo(user)
        let i = 0
        for (let attribute of [1, "fredude", "Fred", "Hello", user.getDateCreated, user.getLastUpdated]){
            expect(user_info[i]).toBe(attribute)
            i++
        }
    })

    test('3) updateUserUsername() static method', ()=> {
        UserService.updateUserUsername(user, "Fluffy")
        expect(user.getUsername).toBe("Fluffy")
    })

    test('4) getAllUsernames', ()=> {
        const users = [new User({
            id: 465,
            username: "xjosex",
            name: "Jose",
            bio: "Hi there",
        }), new User({
            id: 5,
            username: "MaximoV",
            name: "Alex"
        })]
        const names = UserService.getAllUsernames(users)
        expect(names[0]).toBe("Jose")
        expect(names[1]).toBe("Alex")
    })
    
})