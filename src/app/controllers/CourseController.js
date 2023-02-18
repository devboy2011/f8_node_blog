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
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/courses/create'))
            .catch(err => next(err));
    }
    
    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {res.render('courses/edit', {
                course: mongooseToObject(course)
            })})
            .catch(err => next(err));
        ;
    }
    
    // PUT /courses/:id
    update(req, res, next) {   
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => next(err));    
    }
    
    // DELETE /courses/:id
    remove(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(err => next(err));
    }
    
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(err => next(err));
    }
    
    destroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(err => next(err));
    }
}

module.exports = new CourseController();
