const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose')

class MeController {

    

    // [GET] /me/stored/courses
    courses(req, res, next) {
    
        let courseQuery = Course.find({});
        
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }
    
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then (([courses, deletedCount]) => 
                res.render('me/courses', {
                    deletedCount,
                    courses : multipleMongooseToObject(courses)
            }))
            .catch(next);
    
        
            
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
