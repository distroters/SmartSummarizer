const users = require('../db/db').users
const route = require('express').Router()
route.get('/', (req, res) => {

    res.render('signup')
})


route.post('/', (req, res) => {

    users.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((createdUser) => {
        res.redirect('/login')

    })

})

exports = module.exports = route