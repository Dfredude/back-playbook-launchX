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
          test('2) Getters', () => {
            const user = new User({
                id: 1,
                username: "fredude",
                name: "Fred",
                bio: "Bio",
            })
            expect(user.getUsername).toBe("fredude")
            expect(user.getBio).toBe("Bio")
            expect(user.getDateCreated).not.toBeUndefined()
            expect(user.getLastUpdated).not.toBeUndefined()
          })
          test("3) Setters", ()=> {
            const user = new User({
                id: 1,
                username: "fredude",
                name: "Fred",
                bio: "Bio",
            })
            user.setUsername = "Other"
            expect(user.getUsername).toBe("Other")

            user.setBio = "New Bio"
            expect(user.getBio).toBe("New Bio")
          })
})