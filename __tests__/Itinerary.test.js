const Itinerary = require('../src/Itinerary')
const Port = require('../src/Port.js')


describe('itinerary', () => {
    it("can be instatiated", () => {
        expect(new Itinerary()).toBeInstanceOf(Object)
    })
    it('can have ports', () => {
        const dover = new Port('Dover')
        const calais = new Port('Calais')

        const itinerary = new Itinerary([dover, calais])

        expect(itinerary.ports).toEqual([dover, calais])
    })
})