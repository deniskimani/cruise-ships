function Port() {
    this.ships = []
}

Port.prototype.addShip = function(ships) {
    this.ships.push(ships)
    return this.ships
}

Port.prototype.removeShip = function(ship) {
    let index = this.ships.indexOf(ship)
    this.ships.splice(index, 1)
    return this.ships
}
module.exports = Port