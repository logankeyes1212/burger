var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            console.log("all " + res)
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            console.log("insert " + res)
            cb(res);
        });
    },
    updateOne: function (objColVals,  cb) {
        orm.updateOne("burgers", objColVals,  function (res) {
            console.log("update " + res)
            cb(res);
        });
    },

};


module.exports = burger;
