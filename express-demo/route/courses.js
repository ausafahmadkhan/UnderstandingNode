const express = require("express");
const router = express.Router();
const Joi = require("joi");

router.use(express.json())

const courses = [
    {id : 1, name : "course1"},
    {id : 2, name : "course2"},
    {id : 3, name : "course3"}
]

function validateCourse(course)
{
    const schema = {
        name : Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
    
}

router.get("/", (req, res) => {
    if (courses)
        return res.send(courses);
    return res.status(404).send("No courses available");
}
)

router.post('/post', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    
        const course =
        {
            id : courses.length + 1,
            name : req.body.name
        };
        courses.push(course);
        res.send(course);
});


router.get('/:id', (req, res) => {
    //res.send(`${req.params.id}, ${req.params}`);
    //res.send(req.query);
    let course =  courses.find(c => c.id === parseInt(req.params.id));
    if (!course) //404
    res.status(404).send("The course for given id is not present");
    res.send((course))
});


router.put("/:id", (req, res) =>
{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send(` Course not present with id : ${req.params.id}`);
    
    const { error } = validateCourse(req.body);
    if (error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    course.name = req.body.name;
    return res.send(course);
})  

router.delete("/:id", (req, res) =>{   
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
    {
        return res.status(404).send(`Course with the id ${req.params.id} is not present`);
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    return res.send(courses);
})

module.exports = router; 
 