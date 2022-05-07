const UserView = require("../../app/views/UserView")

describe("Tests for UserView", ()=> {
    test('1) Return an error when trying to create a new user with a null/undefined payload ', () => { 
        const result =  UserView.createUser()
        expect(result.error).toMatch(/payload no existe/)
     })

     test('2) Return an error when having invalid property values for the payload', ()=> {
         const payload = { id: "id", username: null, name: 12}
         const result = UserView.createUser(payload)
         expect(result.error).toMatch(/necesitan tener un valor valido/)
     })
     
     test('3) Return an error when having missing properties', () => {
        const payload = { id: "id", name: 12}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
     })
     test('4) Create User object by a given payload', ()=> {
        const payload = { id: 984, username: "fredude", name: "Fred"}
        const user = UserView.createUser(payload)
        expect(user.name).toBe("Fred")
        expect(user.id).toBe(984)
        expect(user.username).toBe("fredude")
     })
})