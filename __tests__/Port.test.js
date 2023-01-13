const Port = require("../src/Port.js")

describe("Port", () => {
    it("can be instatiated", () => {
        expect(new Port()).toBeInstanceOf(Object)
    })

})