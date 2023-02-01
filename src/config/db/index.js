const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

async function connect () {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nhien_blog_dev', {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log('Database Connected!')
    } catch (error) {
        console.log('Connect failed!!')
    }
}

module.exports = { connect }