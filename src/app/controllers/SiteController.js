const Course = require('../models/Course')
const { multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then(courses => res.render('home', {
                courses : multipleMongooseToObject(courses)
            }))
            .catch(error => next(error))
            // or .catch(next)
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
