const User = require("../../app/models/User")

describe("Unit tests for the User class", ()=> {
        test('1) Create user object', () => {
            const user = new User({
                id: 1,
                username: "fredude",
                name: "Fred",
                bio: "Bio",
            })    
            expect(user.id).toBe(1)
            expect(user.username).toBe("fredude")
            expect(user.name).toBe("Fred")
            expect(user.bio).toBe("Bio")
            expect(user.dateCreated).not.toBeUndefined()
            expect(user.lastUpdated).not.toBeUndefined()
          })
})