const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name : {type : String, default:'', minLength : 1},
    des : String,
    img : String,
    createdAt : {type : Date, default: Date.now},
    udpatedAt : {type : Date, default: Date.now}
})

module.exports = mongoose.model('Course', Course)
