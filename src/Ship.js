function Ship(name) {
    this.currentPort = name

}
Ship.prototype.setSail = function() {
    this.currentPort = false
}

Ship.prototype.dock = function(port) {
    this.currentPort = port
}
module.exports = Ship