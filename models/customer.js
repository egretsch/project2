var orm = require('../config/orm.js')

let customer = {
    all: function(cb){
        orm.all('customers', function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update('customers',id,cb);
    },

    create: function(name, cb){
        orm.create('customers', name, cb);
    }
}

module.exports = burger;