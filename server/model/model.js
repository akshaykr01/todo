const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    todo: {
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

const userdb = mongoose.model('list',schema);
module.exports = userdb;
