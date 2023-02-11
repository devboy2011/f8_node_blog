const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name : {type : String},
    des : String,
    img : String,
    videoId : String,
    createdAt : {type : Date, default: Date.now},
    udpatedAt : {type : Date, default: Date.now}
})

module.exports = mongoose.model('Course', Course)
