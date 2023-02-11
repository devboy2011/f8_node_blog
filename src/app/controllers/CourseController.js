const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose')

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
    
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    
    // [POST] /courses/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
        res.render('courses/create');
    }
    
}

module.exports = new CourseController();
