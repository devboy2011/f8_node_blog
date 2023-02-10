const Course = require('../models/Course');
const { multipleMongooseToObject,mongooseToObject} = require('../../util/mongoose')

class CourseController {
    // [GET] /courses
    index(req, res) {
        res.send('404 File Not Found');
    }

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {
                    course : mongooseToObject(course)
                });
            })
            .catch(err => next(err));
    }
}

module.exports = new CourseController();
