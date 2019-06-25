var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
        orm.all("burgers", function(response) {
            cb(response)
        })
    },
    create: function(name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb)
    },
    update: function(id, cb) {
        var eaten = `id=${id}`
        orm.update("burgers", {
            devoured: true
        }, eaten, cb)
    }
}

module.exports = burger