const mongoose = require('mongoose')
const Schema = mongoose.Schema

const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Course = new Schema({
    name : {type : String, require: true},
    des : {type: String, maxLength: 500},
    img : String,
    videoId : String,
    slug : {type: String, slug: 'name', unique: true},
}, {
    timestamps : true
})


const mongooseDelete = require('mongoose-delete')
mongoose.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: true
})

module.exports = mongoose.model('Course', Course)
