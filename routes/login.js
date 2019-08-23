const users = require('../db/db').users
const passport = require('../passport/passport')
const express = require('express')
const route = require('express').Router()
const path = require('path')

route.get('/', (req, res) => {
    res.render('login')

})


route.post('/', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/select'
}))




exports = module.exports = route