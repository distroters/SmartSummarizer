const route = require('express').Router()
const express = require('express')
let path = require('path')
const fs = require('fs')

route.use('/', express.static(path.join(__dirname, "/../public/homePage")))
route.use('/select', express.static(path.join(__dirname, "/../public/selectionPage")))


route.get('/uploadImage', (req, res) => {
    // if(req.user) {
    //     res.redirect('/upload')
    // }
    // else {
    //     res.redirect('/login')
    // }
    res.redirect('/upload')
})

route.get('/uploadText', (req, res) => {
    // if(req.user) {
    //     res.redirect('/text')
    // }
    // else {
    //     res.redirect('/login')
    // }
    res.redirect('/text')
})


route.use('/imageSummary', require('./imageSummary'))
route.use('/text', require('./text'))
route.use('/upload', require('./upload'))
route.use('/login', require('./login'))
route.use('/signup', require('./signup'))
route.use('/getText', require('./getText'))
route.use('/logout', require('./logout'))


  
exports = module.exports = route