const { multipleMongooseToObject} = require('../../util/mongoose')
const Course = require('../models/Course')

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({}) 
            .then(courses => {
                res.render('home', {
                    courses : multipleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
