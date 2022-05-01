const Spiderman = require("../app/Spiderman")

describe("Unit test for Spiderman class", () => {
    test('1) Create spiderman class', () => {
      const andrewGarfield = new Spiderman({
            name : "Spiderman Sony",
            age : 31,
            actor : "Andrew Garfield",
            movies : 2,
            studio: "Sony"})
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
    });
    test('2) Use the method getInfo()', () => {
        const tomHolland = new Spiderman({
            name :"Spiderman Marvel",
            age : 25,
            actor : "Tom Holland",
            movies : 5,
            studio: "Marvel"
        })
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
  })