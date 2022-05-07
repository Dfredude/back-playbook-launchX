const UserView = require("../../app/views/UserView")

describe("Tests for UserView", ()=> {
    test('1) Return an error when trying to create a new user with a null/undefined payload ', () => { 
        const result =  UserView.createUser()
        expect(result.error).toMatch(/payload no existe/)
     })
})