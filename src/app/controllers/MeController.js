const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/courses
    courses(req, res, next) {
        Course.find({})
            .then(courses =>res.render('me/courses', {
                courses : multipleMongooseToObject(courses)
            }))
            .catch(err => next(err));
    }
    
    // [GET] /me/trash/courses
    trash(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses : multipleMongooseToObject(courses)
            }))
            .catch(err => next(err));
    }
}

module.exports = new MeController();
